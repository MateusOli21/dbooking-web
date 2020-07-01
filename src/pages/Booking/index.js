import React, { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";
import { toast } from "react-toastify";

import api from "../../services/api";
import history from "../../services/history";

import SmallTable from "../../assets/table-small.svg";
import SelectedTable from "../../assets/table-small-selected.svg";

import {
  Wrapper,
  Container,
  DateContainer,
  DatePicker,
  HourContainer,
  Hour,
  HoutText,
  ResumeText,
  TableContainer,
  PageTitle,
  InputLabel,
  Tables,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  Table,
} from "./styles";

export default function Booking() {
  const [schedule, setSchedule] = useState([]);
  const [tables, setTables] = useState([]);
  const [date, setDate] = useState(new Date());

  const search = "/";
  const regxSearch = new RegExp(search, "g");
  const defaultDate = format(new Date(), "P").replace(regxSearch, "-");

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedHour, setSelectedHour] = useState("18:00");
  const [selectedTable, setSelectedTable] = useState(0);

  const selectedBookingDate = `${selectedDate}T${selectedHour}:00-03:00`;

  useEffect(() => {
    async function getSchedule() {
      const response = await api.get("tables", {
        params: { date },
      });

      setTables(response.data[0].tablesAvailable);
      setSchedule(response.data);
    }

    getSchedule();
  }, [date]);

  function handleSelectDate(e) {
    const searchDate = parseISO(e.target.value);
    const selectedDate = e.target.value;

    setDate(searchDate);
    setSelectedDate(selectedDate);
    setSelectedTable(0);
  }

  function handleHourChange(index, hour) {
    setTables(schedule[index].tablesAvailable);
    setSelectedHour(hour);
  }

  function handleSelectedTable(tableId) {
    setSelectedTable(tableId);
  }

  async function handleSubmit() {
    const booking = { table_id: selectedTable, date: selectedBookingDate };

    try {
      await api.post("bookings", booking);
      toast.success("Resrva criada com sucesso!");
      history.push("/dashboard");
    } catch (err) {
      toast.error("Erro ao tentar criar reserva.");
    }
  }

  return (
    <Wrapper>
      <PageTitle>Fazer uma reserva</PageTitle>

      <Container>
        <DateContainer>
          <InputLabel>Escolha uma data</InputLabel>
          <DatePicker type="date" onChange={handleSelectDate} />

          <InputLabel>Escolha uma horário</InputLabel>
          <HourContainer>
            {schedule.map((hour, index) => (
              <Hour
                key={hour.time}
                selected={selectedHour.includes(hour.time) ? "selected" : ""}
                onClick={() => handleHourChange(index, hour.time)}
              >
                <HoutText>{hour.time}</HoutText>
              </Hour>
            ))}
          </HourContainer>

          <InputLabel>Resumo da reserva</InputLabel>
          <ResumeText>{` ${format(date, "PPP", {
            locale: pt,
          })} às ${selectedHour}h`}</ResumeText>
          <ResumeText>{`Mesa número 0${selectedTable}`}</ResumeText>
        </DateContainer>

        <TableContainer>
          <InputLabel>Escolha uma mesa</InputLabel>

          <Tables>
            {tables.map((table) => (
              <Table
                key={table.table_id}
                src={
                  selectedTable === table.table_id ? SelectedTable : SmallTable
                }
                alt="table"
                available={table.available}
                selected={selectedTable === table.table_id ? "selected" : ""}
                onClick={() => handleSelectedTable(table.table_id)}
              />
            ))}
          </Tables>

          <ButtonsContainer>
            <SecondaryButton to="/dashboard">Voltar</SecondaryButton>
            <PrimaryButton type="submit" onClick={handleSubmit}>
              Realizar reserva
            </PrimaryButton>
          </ButtonsContainer>
        </TableContainer>
      </Container>
    </Wrapper>
  );
}

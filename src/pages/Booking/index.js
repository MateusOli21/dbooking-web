import React, { useState, useEffect } from "react";
import { parseISO } from "date-fns";

import api from "../../services/api";

import SmallTable from "../../assets/table-small.svg";

import {
  Wrapper,
  Container,
  DateContainer,
  DatePicker,
  HourContainer,
  Hour,
  HoutText,
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
    const selectedDate = parseISO(e.target.value);

    setDate(selectedDate);
  }

  function handleHourChange(index) {
    setTables(schedule[index].tablesAvailable);
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
              <Hour key={hour.time} onClick={() => handleHourChange(index)}>
                <HoutText>{hour.time}</HoutText>
              </Hour>
            ))}
          </HourContainer>
        </DateContainer>

        <TableContainer>
          <InputLabel>Escolha uma mesa</InputLabel>

          <Tables>
            {tables.map((table) => (
              <Table
                key={table.table_id}
                src={SmallTable}
                alt="table"
                available={table.available}
              />
            ))}
          </Tables>

          <ButtonsContainer>
            <SecondaryButton to="/dashboard">Voltar</SecondaryButton>
            <PrimaryButton>Realizar reserva</PrimaryButton>
          </ButtonsContainer>
        </TableContainer>
      </Container>
    </Wrapper>
  );
}

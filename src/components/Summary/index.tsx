import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryCard } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

export function Summary(){
  const { transactions } = useContext(TransactionsContext)
 

  console.log(transactions)
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>R$ 8.200,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>R$ 9.200,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <S.Main>
      <Header />
      <Summary />
      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>
                    <span className="description">
                      <span>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </span>
                      <span>
                        {transaction.description}
                      </span>
                    </span>
                  </td>
                  
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </S.Main>
  );
}

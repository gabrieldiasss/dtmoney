import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighLight, TransactionaContainer, TransactionTable } from "./styles";


export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

	return (
		<div>
			<Header />
			<Summary />

			<TransactionaContainer>
				<SearchForm />
				<TransactionTable>
					<tbody>
						{transactions.map(transaction => {
							return (
								<tr key={transaction.id} >
									<td width="50%">{transaction.description}</td>
									<td>
										<PriceHighLight variant={transaction.type}>
											{transaction.type === "outcome" && '- '}
											{priceFormatter.format(transaction.price)}
										</PriceHighLight>
									</td>
									<td>{transaction.category}</td>
									<td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
								</tr>
							)
						})}
					</tbody>
				</TransactionTable>
			</TransactionaContainer>
		</div >
	)
}
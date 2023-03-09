import * as Diolog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles"
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Diolog.Portal>
            <Overlay>
                <Content>
                    <Diolog.Title>
                        Nova transação
                    </Diolog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    <form>
                        <input type="text" placeholder="Descrição" required/>
                        <input type="number" placeholder="Preço" required/>
                        <input type="text" placeholder="Categoria" required/>

                        <TransactionType>
                            <TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>

                            <TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>

                </Content>
            </Overlay>
        </Diolog.Portal>
    )
}
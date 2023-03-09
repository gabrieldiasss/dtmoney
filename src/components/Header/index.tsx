import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Diolog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Diolog.Root>
                    <Diolog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Diolog.Trigger>

                   <NewTransactionModal />
                </Diolog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}
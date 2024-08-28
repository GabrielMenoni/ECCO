/* eslint-disable prettier/prettier */
import { AcessFrameWrapper, FooterWrapper, LogoWrapper } from './styles'
import logoMain from '../../assets/images/logo-side.svg'

export function AcessFrame() {
    return (
        <AcessFrameWrapper>
            <LogoWrapper>
                <img src={logoMain} alt=""/>
            </LogoWrapper>
            <div>
                <FooterWrapper>
                    <a href="/contato">Sobre</a>
                    <a href="/contato">Termos de Serviço</a>
                </FooterWrapper>
                <FooterWrapper>
                    <a href="/contato">Contato (xx) - xxxx-xxxx</a>
                </FooterWrapper>
                <FooterWrapper> © ECCO - 2024 </FooterWrapper>
            </div>
        </AcessFrameWrapper>
    )
}

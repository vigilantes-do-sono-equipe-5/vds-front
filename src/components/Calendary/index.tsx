import {
  ButtonContainer,
  Column,
  Container,
  ContentContainer,
  Days,
  DaysContainer,
  Header,
  Image,
  Number,
  NumberContainer,
  SecondContainer,
  StyledBtn,
  Year
} from './styled'

function Calendary() {
  return (
    <Container>
      <Header>
        <Image
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff09fc03a692445ec9ed0bd2a0913e06e'
        />
        <Year>2023</Year>
        <Image
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6d916add2c144a1ea75eaceb4f878ce3'
        />
      </Header>
      <SecondContainer>
        <ContentContainer>
          <DaysContainer>
            <Days>D</Days>
            <Days>S</Days>
            <Days>T</Days>
            <Days>Q</Days>
            <Days>Q</Days>
            <Days>S</Days>
            <Days>S</Days>
          </DaysContainer>
          <NumberContainer>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>5</Number>
            <Number>6</Number>
            <Number>7</Number>
            <Number>8</Number>
            <Number>9</Number>
            <Number>10</Number>
            <Number>11</Number>
            <Number>12</Number>
            <Number>13</Number>
            <Number>14</Number>
            <Number>15</Number>
            <Number>16</Number>
            <Number>17</Number>
            <Number>18</Number>
            <Number>19</Number>
            <Number>20</Number>
            <Number>21</Number>
            <Number>22</Number>
            <Number>23</Number>
            <Number>24</Number>
            <Number>25</Number>
            <Number>26</Number>
            <Number>27</Number>
            <Number>28</Number>
            <Number>29</Number>
            <Number>30</Number>
          </NumberContainer>
        </ContentContainer>
        <Column>
          <ButtonContainer>
            <StyledBtn />
            Semana
          </ButtonContainer>
          <ButtonContainer>
            <StyledBtn />
            Mês
          </ButtonContainer>
          <ButtonContainer>
            <StyledBtn />
            Ano
          </ButtonContainer>
        </Column>
      </SecondContainer>
    </Container>
  )
}

export default Calendary

import React from 'react'
import TeacherForm from '../../pages/TeacherForm'

import whatsappIcon from  '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://images.unsplash.com/photo-1559628129-67cf63b72248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
        <div>
          <strong>TEACHER</strong>
          <span>Quimica</span>

          <p>
            Expertise em fights de fundo de quintal
                  <br /><br />
                  Fighting against the machine
                </p>

          <footer>
            <p>
              Preço/hora
                  <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="" />
                  Entrar em contato
                </button>

          </footer>
        </div>
      </header>
    </article>
  )
}

export default TeacherItem
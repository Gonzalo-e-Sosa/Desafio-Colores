import './NotificationCard.css'

interface Props {
  result: boolean
  btnAction: (e: React.MouseEvent) => void
}

function CircleCheckIcon(props: { className: string | undefined }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function CircleXIcon(props: { className: string | undefined }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
}

const NotificationCard: React.FC<Props> = ({ result, btnAction }) => {
  const correctMessage = "¡Respuesta correcta! Buen trabajo."
  const incorrectMessage = "Respuesta incorrecta. Vuelve a intentarlo."

  return (
    <div className="answer">
      {result
        ? (
          <>
            <CircleCheckIcon className="correct" />
            <h3>¡Correcto!</h3>
            <p className="message">{correctMessage}</p>
          </>
        )
        : (
          <>
            <CircleXIcon className="incorrect" />
            <h3>¡Incorrecto!</h3>
            <p className="message">{incorrectMessage}</p>
          </>
        )
      }

      <button
        className="retry"
        onClick={btnAction}
      >
        Volver a jugar
      </button>
    </div>
  )
}

export default NotificationCard;
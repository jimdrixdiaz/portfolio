import './Button.scss';

function Button({className, label, icon}) {
  return (
    <button className={className}>
        <span>{label}</span>
    </button>
  )
}

export default Button
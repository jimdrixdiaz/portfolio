import './Button.scss';
import EnvelopeIcon from '@/assets/envelope.svg?react';

function Button({className, label, icon}) {
  return (
    <button className={className}>
        {icon ? 
        <>
            <span className="button-icon"><EnvelopeIcon /></span>
            <a href="mailto:jimdrixdiaz@gmail.com">{label}</a>
        </>
        :
            <span>{label}</span>
        }
    </button>
  )
}

export default Button
import "./inputField.scss";

export default function InputField({ label, type, textarea = false }) {
    return (
        <div className={`field-container flex-row ${textarea ? 'textarea' : ''}`}>
            <label className={`field-label ${textarea ? 'textarea' : ''}`}>
                {label}:
            </label>
            {
                textarea ?
                    <textarea className='field-input textarea' />
                    :
                    <input className={'field-input '} type={type} />
            }
        </div>
    )
}
import React from 'react';
import './ReminderButton.css';
import remiderOffIcon from '../../assets/icon/notification/off.svg';
import reminderOnIcon from '../../assets/icon/notification/on.svg';

export default function ReminderButton({isOn, onClickHandler}) {
    const [isReminderOn, setIsReminderOn] = React.useState(false);

    const handleMouseEnter = () => {
        setIsReminderOn(true);
    }
    const handleMouseOut = () => {
        setIsReminderOn(false);
    }

    React.useEffect(() => {
        
    }, []);

    if(isOn) {
        return (
            <>
                <button className="reminder-button-on" onClick={onClickHandler}>
                    <img src={reminderOnIcon} alt="reminder icon" />
                    <label>Pengingat</label>
                </button>    
            </>
        )
    }
  return (
    <>
        <button className="reminder-button" onClick={onClickHandler} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <img src={isReminderOn? reminderOnIcon : remiderOffIcon} alt="reminder icon" />
            <label>Pengingat</label>
        </button>    
    </>
  )
}

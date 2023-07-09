import { useState, createContext, useContext } from 'react'

const Notification = ({ type, text}) => {
    const notifiactionStyle = {
      position: 'absolute',
      top: 100,
      right: 50,
      backgroundColor: type === 'success' ? 'blue' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px',
      borderRadius: 10
    }
  
    return (
      <div style={notifiactionStyle}>
        {text}
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text) => {
        setNotificationData({ type, text})

        setTimeout(() => {
            setNotificationData({ type, text: ''})
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification type={notificationData.type} text={notificationData.text}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
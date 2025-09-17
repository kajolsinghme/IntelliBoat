import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const ChatBox = () => {
  const {selectedChat, theme} = useAppContext()

  const[messages, setMessages] =  useState([])
  const[loading, setLoading] =  useState(false)

  useEffect(() => {
    if(selectedChat){
      setMessages(selectedChat.messages)
    }
  },[selectedChat])
  return (
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'>
      {/* Chat Messages */}
      <div className='flex-1 mb-5 overflow-y-scroll'>

      </div>
      {/* Prompt Input Box */}
      <form action=""></form>
    </div>
  )
}

export default ChatBox
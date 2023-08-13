import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import ButtonIcon from '../components/ButtonIcon'
import Sidebar from '../components/sidebar'
import KeyShorts from '@/components/KeyShorts'


import IconSidebar from '@/icons/IconSidebar'
import IconArrow from '@/icons/IconArrow'
import IconInfo from '@/icons/IconInfo'
import IconAbout from '@/icons/IconAbout'
import IconKeyboard from '@/icons/IconKeyboard'
import IconModeBug from '@/icons/IconModeBug'
import IconModeExplain from '@/icons/iconModeExplain'
import IconModeRefractor from '@/icons/IconModeRefractor'
import IconProfile from '@/icons/IconProfile'
import IconPlus from '@/icons/iconPlus'

function index() {

  const [mes, setMes] = useState("Loading")
  const [input, setInput] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/api/prompt", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: input })
      })
      console.log('successfully posted data')

      // server respnonse
      const data = await response.json()
      setMes(data.prompted_data)
      console.log('successfully received data:', mes)

    } catch (error) {
      console.error("Failed to send Form ->", error)
    }
  }

  // sidebar settings
  const [sidebar, setSideBar] = useState<boolean>(true)

  const toggleSidebar = () => {
    setSideBar(!sidebar)
  }




  // all mode settings:
  const [mode, setMode] = useState<string>("one")

  const toggleSwitch = (activeTab: string) => {
    setMode(activeTab)
  }


  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }


  // info menu

  const [infoMenu, setInfoMenu] = useState(false)

  const toggleInfoMenu = () => {
    if (typeof window !== 'undefined') {
        const info = document.querySelector("#button-info #icon-btn");

        if (info) {
            info.classList.toggle('bg-light-green');
        }
    }
    setInfoMenu(!infoMenu);
  }


  // outupt
  const [output, setOutput] = useState(false)
  const [bin, setBin] = useState(false)

  const showBin = (e: any) => {
    setBin(!bin)
  }


  // modes

  const [modeMenu, setModeMenu] = useState(false)

  const toggleModeMenu = (e: any) => {
    setModeMenu(!modeMenu)
  }

  const modes = {
    "bug": "icon",
    "explain": "icon",
    "refractor": "icon"
  }


  // Keyboard Shortcuts

  const [keyShorts, setKeyShorts] = useState(false)

  const toggleKeyShorts = () => {
    setKeyShorts(!keyShorts)
  }


  return (
    <div className="relative w-full h-screen bg-white flex">
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
      <div id="button-container" className={`${sidebar ? 'hidden' : 'visible'} absolute top-4 left-4`}>
        <ButtonIcon icon={IconSidebar} text="Open sidebar" onClick={toggleSidebar} />
      </div>
      
      <div id="main" className="w-full bg-white flex flex-col items-center justify-between">
        {infoMenu ? (
          <div id="info-menu" className="absolute h-24 w-48 border border-gray top-20 right-16 rounded-lg">
            <div id="about-tab" className="w-full h-1/2 px-4 flex justify-start items-center gap-2 hover:bg-light-green cursor-pointer">
              <IconAbout />
              <div className="text-sm">About this project</div>
            </div>
            <div id="keyboard-tab" className="w-full h-1/2 px-4 flex justify-start items-center gap-2 hover:bg-light-green cursor-pointer">
              <IconKeyboard />
              <div className="text-sm" onClick={toggleKeyShorts}>Keyboard shortcuts</div>
            </div>
          </div>
        ) : (
          null
        )}
        {keyShorts ? ( <KeyShorts /> ) : null }
        <div id="button-info" className={"absolute top-4 right-4"}>
          <ButtonIcon icon={IconInfo} text="Click for more Info" onClick={toggleInfoMenu}/>
        </div>
        <div id="mode-container" className="w-full flex flex-col justify-between items-center">
          <div id="mode-btn">
            <button
              onClick={toggleModeMenu}
            >mode</button>
            {modeMenu ? (
            <div id="mode-menu" className="aboslute z-20 w-40 h-52">
              <div>bug</div>
              <div>explain</div>
              <div>refractor</div>
            </div>
            ) : (
              null
            )}
          </div>
          <div id="mode-switch" data-isOn={mode} className="relative mt-8 w-1/3 h-14 flex bg-light-green cursor-pointer rounded-2xl">
            <motion.div 
            className="absolute z-10 w-1/3 h-full p-1"
            layout
            transition={spring}
            animate={{ 
              x: mode === "one" 
                  ? '0%' 
                  : mode === "two"
                      ? '100%'
                      : '200%',
            }} 
          >
            <div id="white-ball" className="w-full h-full bg-white rounded-2xl"></div>
          </motion.div>
            <div 
              onClick={() => toggleSwitch("one")}
              className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
              >
                <div><IconModeBug /></div>
                <div>Bug</div>
              </div>
            <div 
              onClick={() => toggleSwitch("two")}
              className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
            >
              <div><IconModeExplain /></div>
              <div>Explain</div>
            </div>
            <div 
              onClick={() => toggleSwitch("three")}
              className="selected-mode flex-1 flex z-10 justify-center items-center gap-2"
            >
              <div><IconModeRefractor /></div>
              <div>Refractor</div>
            </div>
          </div>
        </div>
        {output ? (
            <div 
            id="output-container"
            className="w-3/5 h-auto"
          >
            <div id="output-block">
              <div 
                id="question-block"
                onClick={showBin}
                className="relative bg-light-green w-full h-14 px-6 py-4 flex items-center gap-6 rounded-2xl"
              >
                <IconProfile />
                <p id="user-question">How to plant a carrot?</p>
                {bin ? (
                  <div id="bin-icon" className="absolute right-6">
                    <IconPlus />
                  </div>
                ) : (
                  null
                )}  
              </div>
              <div id="answer-block"></div>
            </div>
          </div>
        ) : null }
        <div id="prompt-container" className="mb-12 w-full flex justify-center">
          <form 
            id="prompt-bar" 
            className="bg-light-green px-6 py-4 w-3/5 flex justify-between items-center rounded-2xl"
            onSubmit={handleSubmit}
          >
            <textarea 
              name="prompt" 
              id="prompt-block"
              value={input}
              onChange={handleInput}
              className="bg-transparent w-full min-h-[16px] max-h-[200px] h-6 outline-none resize-none"
              placeholder="Enter a prompt ..."
            ></textarea>
            <button 
              id="submit-btn"
              type="submit"
              className="h-4 w-4"
            >
              <IconArrow />
            </button>
          </form>
        </div>
      </div>



      {/* <div className="input-block">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prompt"></label>
          <input 
            type="text" 
            name="prompt" 
            value={input}
            onChange={handleInput}
          />
          <p>{input}</p>
          <button 
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <h1 className="text-5xl text-blue-700">Hi</h1>
      <div className="result">
        <p className="result-text">
          {mes}
        </p>
      </div> */}
    </div>
  )
}

export default index

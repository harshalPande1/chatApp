"use client"
import React, { useState } from "react";

const useShowHideToggle = () :[boolean , ()=>void] => {
    const [show, setShow] = useState<boolean>(false)

    const changeToggler = () => setShow(!show)
  return [show , changeToggler]
}

export default useShowHideToggle
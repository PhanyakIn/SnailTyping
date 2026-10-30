"use client"
import { clear } from "console";
import { useState,useEffect } from "react"

export function useTimer(started:boolean ,sec: number) {
    const [count,setCount] = useState(sec)

    useEffect(()=> {
        if (!started) return;
        const id = setInterval(()=> {
            setCount((c) => {
                if (c<=1) { clearInterval(id); return 0; }
                return c-1;
            })
        },1000)

        return () => clearInterval(id)
    }, [started] )
    
    return count;
    
}
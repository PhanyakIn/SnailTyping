let time: number = 5

function timer(sec: number): void {
    let rm: number = sec
    const intervalId: NodeJS.Timeout = setInterval( ()=>{
        console.log(rm)
        rm -= 1
        if (rm === 0) {
            clearInterval(intervalId)
            console.log("Time's out")
        }
    }, 1000 )
}

timer(time)
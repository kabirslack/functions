function cp(callback,wait=2e3){let timerId;return(...args)=>{clearTimeout(timerId),timerId=setTimeout((()=>{callback(...args)}),wait)}}

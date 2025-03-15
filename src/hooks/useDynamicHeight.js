import { useEffect, useRef } from "react"

export const useDynamicHeight = (isOpen=false) => {
    const contentRef = useRef(null)
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px"
        }
        else {
            contentRef.current.style.maxHeight = 0
        }
    }, [isOpen])
    return contentRef
}
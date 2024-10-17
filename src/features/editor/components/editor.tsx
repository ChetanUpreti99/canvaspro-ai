"use client"

import { useEffect, useRef } from "react";

import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/useEditor";



const Editor = () => {

	const {init} = useEditor();
	const canvasWrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef(null);


	useEffect(() => {
		const canvas =  new fabric.Canvas(canvasRef.current,{
			controlsAboveOverlay:true,
			preserveObjectStacking:true
		});

		init(
			{
				initialCanvasWrapper:canvasWrapperRef.current!,
				initialCanvas:canvas,
			}
		);
	}, [init]);

return (
	<div className="h-full flex flex-col">

	
	<div className="h-full flex-1 bg-zinc-900" ref={canvasWrapperRef}>
		 {
		 	/* Canvas resizing is difficult hence we are using a div as canvasWrapperRef 
		 	and we will use a resize observer to see if canvasWrapperRef is resized and use the width and height from there to set width 
		 	and height of canvas */
		 }
		<canvas  ref={canvasRef} />
		Canvas Pro Editor
	</div>
	</div>
);
}

export default Editor;
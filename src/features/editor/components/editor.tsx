"use client"

import { useEffect, useRef } from "react";


import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/useEditor";
import Footer from "@/features/editor/components/footer";
import Navbar from "@/features/editor/components/navbar";
import Sidebar from "@/features/editor/components/sidebar";
import Toolbar from "@/features/editor/components/toolbar";



const Editor = () => {

	const { init } = useEditor();
	const canvasWrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef(null);


	useEffect(() => {
		const canvas = new fabric.Canvas(canvasRef.current, {
			controlsAboveOverlay: true,
			preserveObjectStacking: true
		});

		init(
			{
				initialCanvasWrapper: canvasWrapperRef.current!,
				initialCanvas: canvas,
			}
		);

		return ()=>{
			canvas.dispose();
		}
	}, [init]);

	return (
		<div className="h-full flex flex-col">
			<Navbar />
			<div className="flex absolute h-[calc(100%-56px)] w-full top-14">
				<Sidebar />
				<main className="flex relative overflow-auto bg-neutral-800 flex-1 flex-col">
					<Toolbar/>
					<div className="h-full flex-1 bg-zinc-900" ref={canvasWrapperRef}>
						{
							/* Canvas resizing is difficult hence we are using a div as canvasWrapperRef 
							and we will use a resize observer to see if canvasWrapperRef is resized and use the width and height from there to set width 
							and height of canvas */
						}
						<canvas ref={canvasRef} />
						Canvas Pro Editor
					</div>
					<Footer/>
				</main>
			</div>
		</div>
	);
}

export default Editor;
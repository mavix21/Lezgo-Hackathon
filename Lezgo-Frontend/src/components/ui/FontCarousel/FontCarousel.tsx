import './FontCarousel.css';

export function FontCarousel(props: any) {
    const direction = props.direction;

    return (
        <>
            <div className="w-full overflow-hidden whitespace-nowrap pb-15">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className={'moving-text-' + direction + ' w-full flex flex-row'}>
                        {
                            Array.from({ length: props.times }).map((_, i) => (
                                // <div key={i} className='text-8xl'>{props.text} &nbsp;</div>
                                <div>
                                    <a href={props.reference} className='text-8xl' style={{ whiteSpace: 'nowrap' }}>
                                        {props.text} &nbsp;
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >

        </>
    )
}
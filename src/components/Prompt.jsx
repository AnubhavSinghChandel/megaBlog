import { ButtonLarge } from './index';
import { Link } from 'react-router-dom'


function Prompt() {

    return (
        <div className="w-full mx-auto max-w-7xl flex flex-col items-center justify-center p-56">
            <div className="w-full mx-auto max-w-7xl flex flex-col items-center justify-center p-20">
                <div className="w-full text-center p-5">
                    <div className="w-full">
                        <h2 className="text-3xl font-bold text-black">No Posts Found</h2>
                        <p className="mt-2 text-gray-600">
                            Seems like you haven&apos;t created any posts yet. Let&apos;s get to it.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <Link to='/createblog'>
                        <ButtonLarge
                            label='Create Post'
                            type='Button'
                        />
                    </Link>
                    <Link to='/allposts'>
                        <ButtonLarge
                            label='All Post'
                            type='Button'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Prompt
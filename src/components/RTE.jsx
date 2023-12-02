import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = '' }) {
    return (
        <div className='w-full'>
            {label &&
                <label htmlFor={label}>
                    {label}
                </label>
            }
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange } }) => (
                    <div className='mt-2'>
                        <Editor
                            apiKey='en02vdpuctd9w8d2xwkyzgvyn6dkbrshgrlrf86tc1nk02d5'
                            init={{
                                height: 500,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                mergetags_list: [
                                    { value: 'First.Name', title: 'First Name' },
                                    { value: 'Email', title: 'Email' },
                                ],
                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                            initialValue="Lets start with something creative!"
                            onEditorChange={onChange}
                        />
                    </div>
                )}
            />
        </div>
    );
}
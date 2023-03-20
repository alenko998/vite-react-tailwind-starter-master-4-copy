// import { useRouteError } from "react-router-dom";
//
// export default function ErrorPage() {
//     const error = useRouteError();
//     console.error(error);
//
//     return (
//         <div >
//             <h1>Oops!</h1>
//             <p>Sorry, an unexpected error has occurred.</p>
//             <p>
//                 <i>{error.statusText || error.message}</i>
//             </p>
//         </div>
//     );
// }

import {NavLink} from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function MessagePage() {

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">You deleted a course</h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <NavLink to={'/courses'} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back to all courses</NavLink>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

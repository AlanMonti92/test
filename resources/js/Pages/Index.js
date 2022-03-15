import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Index = () => {
    const { dentistas } = usePage().props;
    console.log(usePage().props);

    /* return (

        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Dentistas</h1>
                <div className="flex items-center justify-between mb-6">
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">name</th>
                                <th className="px-6 pt-5 pb-4">surname</th>
                            </tr>
                        </thead>
                        <tbody>

                            {dentistas.map(({ id, name, surname }) => (
                                <tr key={id} className="">
                                    <td className="border-t">
                                        {id}
                                    </td>
                                    <td className="border-t">
                                        {name}
                                    </td>
                                    <td className="border-t">
                                        {surname}
                                    </td>
                                </tr>
                            ))}
                            {dentistas.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No dentist found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ); */
};

export default Index;


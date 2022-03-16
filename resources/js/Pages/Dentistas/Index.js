import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import moment from 'moment'
import SearchFilter from '../../Shared/SearchFilter';
import Pagination from '../../Shared/Pagination';

const Index = () => {
  const { dentistas } = usePage().props;
  const {
    data,
    links
  } = dentistas;
  return (

    <div className="bg-white p-8 rounded-md w-full">
        <div className="lg:text-center p-8">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Challenge</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Listar Dentistas</p>
        </div>

        <div className="flex items-center justify-center mb-6">
            <SearchFilter />
        </div>
        <div className=" flex items-center justify-center pb-6">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Surname
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Gender
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Country name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Creado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(({ id, name, email, surname,gender,country, created_at }) => (
                                    <tr key={id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <div className="text-sm leading-5 font-medium text-gray-900">
                                                            {name}
                                                        </div>
                                                        <div className="text-sm leading-5 text-fray-500">
                                                            {email}
                                                        </div>
                                                    </div>
                                                </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                            <div className="ml-2">
                                                <div className="text-sm leading-5 font-medium text-gray-900">
                                                    {surname}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {gender}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {country.name}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {moment(created_at).format('d/m/Y')}
                                            </p>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mb-6">
              <Pagination links={links} />
            </div>

        </div>
  );
};

export default Index;

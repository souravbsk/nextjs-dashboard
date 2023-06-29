import DataTable from '@/components/DataTable/DataTable';
import FormNumberOne from '@/components/FormNumberOne/FormNumberOne';
import FormNumberTwo from '@/components/FormNumberTwo/FormNumberTwo';
import NewItemNav from '@/components/NewItemNav/NewItemNav';
import Stat from '@/components/Stat/Stat';
import React from 'react';

const page = () => {
    return (
        <div>
            <NewItemNav></NewItemNav>
            <div className='p-3 md:p-8'>
            <Stat></Stat>
            <DataTable></DataTable>
            <FormNumberOne></FormNumberOne>
            <div>
        <FormNumberTwo></FormNumberTwo>

            </div>
            </div>
        </div>
    );
};

export default page;
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScienceToy from '../Toys/ScienceToy/ScienceToy';
import Toys from '../Toys/Toys';

const Categoric = () => {
    return (
        <div className='text-center max-w-screen-xl max-h-screen mx-auto rounded-lg my-60'>
            {/* <Tabs className="text-4xl font-bold">
                <TabList className='space-x-16 mb-10'>
                    <Tab>Science kits</Tab>
                    <Tab>Math learning toys</Tab>
                    <Tab>Engineering tools</Tab>
                </TabList>
                <hr />
                <TabPanel>
                   <Toys></Toys>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs> */}
        </div>
    );
};

export default Categoric;
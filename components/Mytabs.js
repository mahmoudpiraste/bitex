import React , { Fragment } from "react";
import { Tab } from '@headlessui/react';
import ContentTab from "./contentabs";


const Tabs = () =>{


    return(
        <div className="main-tabs-comp">
        <Tab.Group>
      <Tab.List>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'selectedlist-01' : 'deselectedlist-01'
              }
            >Activity Summary
            </button>
          )}
            </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'selectedlist-01' : 'deselectedlist-01'
              }
            >Spending Summary
            </button>
          )}
            </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'selectedlist-01' : 'deselectedlist-01'
              }
            >Income Summary
            </button>
          )}
            </Tab>
        
      </Tab.List>
      <Tab.Panels className="tab-panels">

        <Tab.Panel><ContentTab/></Tab.Panel>
        <Tab.Panel>multiple content abale to show</Tab.Panel>
        <Tab.Panel>another content will appear here</Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div>
    )
}

export default Tabs;
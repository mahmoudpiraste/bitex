import React , { Fragment } from "react";
import { Tab } from '@headlessui/react';



const TabsIn = () =>{


    return(
        <div className="main-tabs-comp2">
        <Tab.Group>
      <Tab.List className="list-main">
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'selectedlist-02' : 'deselectedlist-02'
              }
            >History
            </button>
          )}
            </Tab>
      <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'selectedlist-02' : 'deselectedlist-02'
              }
            >Upcomming
            </button>
          )}
            </Tab>
      
        
      </Tab.List>
      <Tab.Panels className="tab-panels">

        
        <Tab.Panel>content2</Tab.Panel>
        <Tab.Panel>content3</Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div>
    )
}

export default TabsIn;
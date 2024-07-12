// External Dependencies
import { Plus } from 'lucide-react';

// Relative Dependencies
import Workspaces from './components/workspaces';
import ActivePrograms from './components/active-programs';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './components/ui/resizeable-panel';
import { Button } from './components/ui/button';

type Props = {};

const Main = (props: Props) => {
  const onClick = async () => {
    try {
      const programs = window.electron.ipcRenderer.invoke(
        'get-running-programs',
      );
      console.log(programs);
    } catch (error) {
      console.log('there was an error');
    }
  };

  return (
    <ResizablePanelGroup className="w-full h-full" direction="horizontal">
      <ResizablePanel defaultSize={33.3} className="h-full" minSize={20}>
        <div className="border-r bg-background h-full">
          <div className="space-y-2">
            <div className="flex flex-row items-center w-full border-b">
              <h3 className="text-lg font-medium p-2 border-gray-200">
                My Workspaces
              </h3>
              <Button onClick={onClick} size="sm" className="ml-auto mr-2">
                <Plus className="mr-2 h-4 w-4" /> New Workspace
              </Button>
            </div>

            <Workspaces />

            <h3 className="text-lg font-medium p-2">Active Programs</h3>
            <ActivePrograms />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={33.3} minSize={20}>
        <div className="border-r bg-background ">
          <div className="space-y-2">
            <h3 className="text-lg font-medium p-2 border-gray-200 border-b">
              Programs
            </h3>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={33.3} minSize={20}>
        <div className="flex flex-col bg-background">
          <div className="space-y-2">
            <h3 className="text-lg font-medium p-2 border-gray-200 border-b">
              Tabs
            </h3>
          </div>
        </div>
      </ResizablePanel>
      {/* </div> */}
    </ResizablePanelGroup>
  );
};

export default Main;

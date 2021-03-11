let allData = [];

const jsonData = {
    // "": {
    //     "domain": "jupyterlab",
    //     "language": "zh-CN",
    //     "plural_forms": "nplurals=1; plural=0;",
    //     "version": "3.0.0b4"
    // },
   "\nConnected: %1": [
       "\n\u5df2\u8fde\u63a5: %1"
   ],
   "\nCreated: %1": [
       "\n\u521b\u5efa\u65f6\u95f4\uff1a%1"
   ],
   "\nLast Execution: %1": [
       "\n\u4e0a\u6b21\u6267\u884c: %1"
   ],
   "\nModified: %1": [
       "\n\u4fee\u6539\u65f6\u95f4\uff1a%1"
   ],
   "\nPath: %1": [
       "\n\u8def\u5f84: %1"
   ],
   "\nSize: %1": [
       "\n\u5927\u5c0f: %1"
   ],
   "\nWritable: %1": [
       "\n\u53ef\u5199\uff1a%1"
   ],
   "\"%1\" already exists, overwrite?": [
       "\u6587\u4ef6 \"%1\" \u5df2\u5b58\u5728\uff0c\u662f\u5426\u8986\u76d6\uff1f"
   ],
   "\"%1\" already exists. Do you want to replace it?": [
       "\u201c%1\u201d\u5df2\u7ecf\u5b58\u5728\u3002\u4f60\u60f3\u8981\u66ff\u6362\u5b83\u4e48\uff1f"
   ],
   "\"%1\" has changed on disk since the last time it was opened or saved.\nDo you want to overwrite the file on disk with the version open here, \nor load the version on disk (revert)?": [
       "\u201c%1\u201d\u81ea\u4e0a\u6b21\u6253\u5f00\u6216\u4fdd\u5b58\u540e\u5728\u78c1\u76d8\u4e0a\u5df2\u7ecf\u6539\u53d8\u3002\n\u60a8\u60f3\u8981\u7528\u8fd9\u91cc\u6253\u5f00\u7684\u7248\u672c\u8986\u76d6\u78c1\u76d8\u4e0a\u7684\u6587\u4ef6\uff0c \n\u8fd8\u662f\u52a0\u8f7d\u78c1\u76d8\u4e0a\u7684\u7248\u672c(\u590d\u539f)\uff1f"
   ],
   "\"%1\" is not a valid name for a file. Names must have nonzero length, and cannot include \"/\", \"\\\", or \":\"": [
       "\"%1\" \u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684\u6587\u4ef6\u540d\u3002\u6587\u4ef6\u540d\u5fc5\u987b\u5177\u6709\u975e\u96f6\u957f\u5ea6\uff0c\u4e14\u4e0d\u5305\u542b \"/\"\u3001\"\\\" \u6216 \":\""
   ],
   "%1\nKernel: %2": [
       "%1\n\u5185\u6838: %2"
   ],
   "%1 (Developed by Project Jupyter)": [
       "%1 (\u7531 Jupyter \u9879\u76ee\u5f00\u53d1)"
   ],
   "%1 Item": [
       "%1 \u9879",
       "%1 \u9879"
   ],
   "%1 Terminals, %2 Kernel sessions": [
       "%1 \u4e2a\u7ec8\u7aef\uff0c %2 \u4e2a\u5185\u6838\u4f1a\u8bdd"
   ],
   "%1 extension has been blockedExtensions since install. Please uninstall immediately and contact your blockedExtensions administrator.": [
       "%1 \u6269\u5c55\u81ea\u5b89\u88c5\u540e\u5df2\u88abblockedExtensions\u963b\u6b62\u3002\u8bf7\u7acb\u5373\u5378\u8f7d\u5e76\u8054\u7cfb\u60a8\u7684 blockedExtensions \u7ba1\u7406\u5458\u3002"
   ],
   "%1 extension has been removed from the allowedExtensions since installation. Please uninstall immediately and contact your allowedExtensions administrator.": [
       "%1 \u6269\u5c55\u81ea\u5b89\u88c5\u540e\u5df2\u88ab\u4eceblockedExtensions\u4e2d\u79fb\u9664\u3002\u8bf7\u7acb\u5373\u5378\u8f7d\u5e76\u8054\u7cfb\u60a8\u7684 blockedExtensions \u7ba1\u7406\u5458\u3002"
   ],
   "%1 log entries for %2": [
       "%2 \u7684%1 \u4e2a\u65e5\u5fd7\u6761\u76ee"
   ],
   "%1 new messages, %2 log entries for %3": [
       "\u6709\u6765\u81ea%3 \u7684 %1 \u6761\u65b0\u6d88\u606f, %2 \u6761\u65e5\u5fd7\u6761\u76ee"
   ],
  "A build is needed to include the latest changes": [
      "\u9700\u8981\u6784\u5efa\u6765\u5305\u542b\u6700\u65b0\u7684\u66f4\u6539"
  ],
  "A connection to the Jupyter server could not be established.\nJupyterLab will continue trying to reconnect.\nCheck your network connection or Jupyter server configuration.\n": [
      "\u65e0\u6cd5\u8fde\u63a5\u5230 Jupyter \u670d\u52a1\u5668\u3002\nJupyterLab \u5c06\u7ee7\u7eed\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\u6216 Jupyter \u670d\u52a1\u5668\u914d\u7f6e\u3002\n"
  ],
  "A trusted Jupyter notebook may execute hidden malicious code when you openit.": [
      "\u53d7\u4fe1\u4efb\u7684 Jupyter notebook\u53ef\u80fd\u4f1a\u5728\u60a8\u6253\u5f00\u5b83\u65f6\u6267\u884c\u9690\u85cf\u7684\u6076\u610f\u4ee3\u7801\u3002"
  ],
  "ABOUT PROJECT JUPYTER": [
      "\u5173\u4e8e JUPYTER \u9879\u76ee"
  ],
   "About %1": [
       "\u5173\u4e8e %1"
   ],
   "About the %1 Kernel": [
       "\u5173\u4e8e %1 \u5185\u6838"
   ],
  "Activate Command Palette": [
      "\u6fc0\u6d3b\u547d\u4ee4\u9762\u677f"
  ],
  "Activate Next Tab": [
      "\u6fc0\u6d3b\u4e0b\u4e00\u6807\u7b7e\u9875"
  ],
  "Activate Next Tab Bar": [
      "\u6fc0\u6d3b\u4e0b\u4e00\u6807\u7b7e\u680f"
  ],
  "Activate Previous Tab": [
      "\u6fc0\u6d3b\u4e0a\u4e00\u6807\u7b7e\u9875"
  ],
  "Activate Previous Tab Bar": [
      "\u6fc0\u6d3b\u4e0a\u4e00\u6807\u7b7e\u680f"
  ],
  "Activate Previously Used Tab": [
      "\u6fc0\u6d3b\u4e4b\u524d\u4f7f\u7528\u8fc7\u7684\u6807\u7b7e"
  ],
   "Active cell trusted: %1 of %2 cells trusted.": [
       "\u53d7\u4fe1\u4efb\u7684\u6d3b\u52a8\u5355\u5143\u683c: %1 / %2\u4e2a\u5355\u5143\u683c\u53d7\u4fe1\u4efb\u3002"
   ],
  "Add Checkpoint": [
      "\u65b0\u589e\u68c0\u67e5\u70b9"
  ],
  "Add Tag": [
      "\u6dfb\u52a0\u6807\u7b7e"
  ],
  "Advanced Settings Editor": [
      "\u9ad8\u7ea7\u8bbe\u7f6e\u7f16\u8f91\u5668"
  ],
  "Advanced Tools": [
      "\u9ad8\u7ea7\u5de5\u5177"
  ],
   "An error occurred installing <code>%1</code>.": [
       "\u5b89\u88c5 <code>%1</code> \u65f6\u53d1\u751f\u9519\u8bef\u3002"
   ],
  "Any errors will be listed here": [
      "\u4efb\u4f55\u9519\u8bef\u90fd\u5c06\u5728\u6b64\u5217\u51fa\u3002"
  ],
  "Are you sure that you want to run arbitrary Javascript within your JupyterLab session?": [
      "\u60a8\u786e\u5b9a\u8981\u5728\u60a8\u7684 JupyterLab \u4f1a\u8bdd\u4e2d\u8fd0\u884c\u4efb\u610f\u7684 Javascript \u5417\uff1f"
  ],
   "Are you sure you want to close \"%1\"?": [
       "\u60a8\u786e\u5b9a\u8981\u5173\u95ed\u201c%1\u201d\u5417\uff1f"
   ],
   "Are you sure you want to delete %1": [
       "\u60a8\u786e\u5b9a\u8981\u5220\u9664 %1 \u5417\uff1f"
   ],
   "Are you sure you want to exit JupyterLab?\n\nAny unsaved changes will be lost.": [
       "\u60a8\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u5417? \u6240\u6709\u672a\u4fdd\u5b58\u7684\u64cd\u4f5c\u90fd\u4f1a\u4e22\u5931\u3002"
   ],
   "Are you sure you want to permanently delete the %1 selected item?": [
       "\u60a8\u786e\u5b9e\u8981\u6c38\u4e45\u5220\u9664 %1 \u4e2a\u9009\u5b9a\u7684\u9879\u76ee\u5417?",
       "\u60a8\u786e\u5b9e\u8981\u6c38\u4e45\u5220\u9664 %1 \u4e2a\u9009\u5b9a\u7684\u9879\u76ee\u5417?"
   ],
   "Are you sure you want to permanently delete: %1?": [
       "\u4f60\u786e\u5b9a\u8981\u6c38\u4e45\u5220\u9664: \u201c%1\u201d \u5417?"
   ],
  "Are you sure you want to refresh?": [
      "\u60a8\u786e\u5b9a\u8981\u5237\u65b0\u5417\uff1f"
  ],
   "Are you sure you want to reload the %1 from the disk?": [
       "\u60a8\u786e\u5b9a\u8981\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d %1 \u5417\uff1f"
   ],
   "Are you sure you want to revert the %1 to the latest checkpoint? ": [
       "\u60a8\u786e\u5b9a\u8981\u5c06 %1 \u8fd8\u539f\u5230\u4e0a\u4e00\u68c0\u67e5\u70b9\u5417\uff1f "
   ],
  "Auto Close Brackets for Text Editor": [
      "\u6587\u672c\u7f16\u8f91\u5668\u81ea\u52a8\u5173\u95ed\u62ec\u53f7"
  ],
  "Autosave Documents": [
      "\u81ea\u52a8\u4fdd\u5b58\u6587\u6863"
  ],
  "Autosave Interval": [
      "\u81ea\u52a8\u4fdd\u5b58\u95f4\u9694"
  ],
  "Breakpoints": [
      "\u65ad\u70b9"
  ],
  "Build": [
      "\u7f16\u8bd1"
  ],
  "Build Complete": [
      "\u6784\u5efa\u5b8c\u6210"
  ],
  "Build Failed": [
      "\u7f16\u8bd1\u5931\u8d25"
  ],
  "Build Recommended": [
      "\u5efa\u8bae\u91cd\u65b0\u7f16\u8bd1"
  ],
  "Build successfully completed, reload page?": [
      "\u6784\u5efa\u5df2\u6210\u529f\u5b8c\u6210\uff0c\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\uff1f"
  ],
  "CONTRIBUTOR LIST": [
      "\u8d21\u732e\u8005\u540d\u5355"
  ],
  "CSV File": [
      "CSV \u6587\u4ef6"
  ],
  "Callstack": [
      "\u8c03\u7528\u5806\u6808"
  ],
  "Cancel": [
      "\u53d6\u6d88"
  ],
  "Cannot Download": [
      "\u65e0\u6cd5\u4e0b\u8f7d"
  ],
  "Cannot Reload": [
      "\u65e0\u6cd5\u91cd\u8f7d"
  ],
  "Cannot Revert": [
      "\u65e0\u6cd5\u6062\u590d"
  ],
  "Cannot Save": [
      "\u65e0\u6cd5\u4fdd\u5b58"
  ],
  "Cannot open": [
      "\u65e0\u6cd5\u6253\u5f00"
  ],
   "Cannot upload file (>%1 MB). %2": [
       "\u65e0\u6cd5\u4e0a\u4f20\u6587\u4ef6 (>%1 MB). %2"
   ],
  "Cell Metadata": [
      "\u5355\u5143\u683c\u5143\u6570\u636e"
  ],
  "Cell type": [
      "\u5355\u5143\u683c\u7c7b\u578b"
  ],
  "Change Kernel\u2026": [
      "\u66f4\u6539\u5185\u6838\u2026"
  ],
  "Change Tab indentation\u2026": [
      "\u66f4\u6539Tab\u7f29\u8fdb\u2026"
  ],
  "Change interface language?": [
      "\u66f4\u6539\u754c\u9762\u8bed\u8a00\uff1f"
  ],
   "Change kernel for %1": [
       "\u66f4\u6539 %1\u7684\u5185\u6838"
   ],
  "Change text editor syntax highlighting": [
      "\u66f4\u6539\u6587\u672c\u7f16\u8f91\u5668\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a"
  ],
  "Change to Code Cell Type": [
      "\u66f4\u6539\u4e3a\u4ee3\u7801\u5757\u7c7b\u578b"
  ],
  "Change to Heading 1": [
      "\u66f4\u6539\u4e3a\u6807\u9898 1"
  ],
  "Change to Heading 2": [
      "\u66f4\u6539\u4e3a\u6807\u9898 2"
  ],
  "Change to Heading 3": [
      "\u66f4\u6539\u4e3a\u6807\u9898 3"
  ],
  "Change to Heading 4": [
      "\u66f4\u6539\u4e3a\u6807\u9898 4"
  ],
  "Change to Heading 5": [
      "\u66f4\u6539\u4e3a\u6807\u9898 5"
  ],
  "Change to Heading 6": [
      "\u66f4\u6539\u4e3a\u6807\u9898 6"
  ],
  "Change to Markdown Cell Type": [
      "\u66f4\u6539\u4e3aMarkdown\u7c7b\u578b"
  ],
  "Change to Raw Cell Type": [
      "\u66f4\u6539\u4e3a\u539f\u59cb\u5355\u5143\u683c\u7c7b\u578b"
  ],
  "Clear": [
      "\u6e05\u7a7a"
  ],
  "Clear All": [
      "\u5168\u90e8\u6e05\u9664"
  ],
  "Clear All Outputs": [
      "\u6e05\u9664\u5168\u90e8\u8f93\u51fa"
  ],
  "Clear Console Cell": [
      "\u6e05\u9664\u63a7\u5236\u53f0\u5355\u5143\u683c"
  ],
  "Clear Console Cells": [
      "\u6e05\u9664\u63a7\u5236\u53f0\u5355\u5143\u683c"
  ],
  "Clear Filters": [
      "\u6e05\u9664\u8fc7\u6ee4\u5668"
  ],
  "Clear Log": [
      "\u6e05\u9664\u65e5\u5fd7"
  ],
  "Clear Output": [
      "\u6e05\u7a7a\u8f93\u51fa"
  ],
  "Clear Outputs": [
      "\u6e05\u9664\u8f93\u51fa"
  ],
  "Clear Workspace": [
      "\u6e05\u9664\u5de5\u4f5c\u533a"
  ],
  "Click on a function to see documentation.": [
      "\u70b9\u51fb\u51fd\u6570\u67e5\u770b\u6587\u6863\u3002"
  ],
  "Close All Other Tabs": ["\u5173\u95ed\u5168\u90e8\u5176\u5b83\u6807\u7b7e"],
  "Close All Tabs": ["\u5173\u95ed\u6240\u6709\u6807\u7b7e"],
  "Close Tab": ["\u5173\u95ed\u6807\u7b7e\u9875"],
  "Close Tabs to Right": ["\u5173\u95ed\u53f3\u4fa7\u6807\u7b7e\u9875"],
  "Close and Shut Down": ["\u5173\u95ed\u5e76\u505c\u6b62"],
  "Close and Shut Down\u2026": ["\u5173\u95ed\u5e76\u7ec8\u6b62\u2026"],
  "Close and Shutdown": [
    "\u5173\u95ed\u5e76\u505c\u6b62\u670d\u52a1\u8fdb\u7a0b",
  ],
  "Close and  Shutdown Terminal":[
"\u5173\u95ed\u5e76\u7ec8\u6b62\u7ec8\u7aef\u670d\u52a1"
  ],
  "Close and  Shutdown Console": [
    "\u5173\u95ed\u5e76\u7ec8\u6b62\u63a7\u5236\u53f0\u670d\u52a1",
  ],
  "Close and  Shutdown Notebook": [
    "\u5173\u95ed\u5e76\u7ec8\u6b62Notebook\u670d\u52a1",
  ],
   "Code": [
       "\u4ee3\u7801"
   ],
   "Code Cell Configuration": [
       "\u4ee3\u7801\u5355\u5143\u683c\u914d\u7f6e"
   ],
   "Code Editor out of Sync": [
       "\u4ee3\u7801\u7f16\u8f91\u5668\u540c\u6b65\u5931\u8d25"
   ],
   "Collapse All Code": [
       "\u6298\u53e0\u6240\u6709\u4ee3\u7801"
   ],
   "Collapse All Outputs": [
       "\u6298\u53e0\u5168\u90e8\u8f93\u51fa"
   ],
   "Collapse Selected Code": [
       "\u6298\u53e0\u9009\u5b9a\u7684\u4ee3\u7801"
   ],
   "Collapse Selected Outputs": [
       "\u6298\u53e0\u9009\u4e2d\u7684\u8f93\u51fa"
   ],
   "Command Palette": [
       "\u547d\u4ee4\u9762\u677f"
   ],
   "Commands": [
       "\u547d\u4ee4"
   ],
    "Commands (%1)": [
        "\u547d\u4ee4 (%1)"
    ],
   "Commit changes to data": [
       "\u63d0\u4ea4\u5bf9\u6570\u636e\u7684\u66f4\u6539"
   ],
   "Complete!": [
       "\u5b8c\u6210\uff01"
   ],
  "Console": [
      "\u63a7\u5236\u53f0"
  ],
   "Console %1": [
       "\u63a7\u5236\u53f0 %1"
   ],
  "Console Run Keystroke": [
      "\u63a7\u5236\u53f0\u8fd0\u884c\u6309\u952e"
  ],
   "Continue": [
       "\u7ee7\u7eed"
   ],
   "Copy": [
       "\u590d\u5236"
   ],
   "Copy Cells": [
       "\u590d\u5236\u5355\u5143\u683c"
   ],
   "Copy Download Link": [
       "\u590d\u5236\u4e0b\u8f7d\u94fe\u63a5"
   ],
   "Copy Path": [
       "\u590d\u5236\u8def\u5f84"
   ],
   "Copy Shareable Link": [
       "\u590d\u5236\u5171\u4eab\u94fe\u63a5"
   ],
   "Copy the selected cells": [
       "\u590d\u5236\u9009\u4e2d\u7684\u5355\u5143\u683c"
   ],
    "Could not find path: %1": [
        "\u627e\u4e0d\u5230\u8def\u5f84 %1"
    ],
   "Create Console for Editor": [
       "\u4e3a\u7f16\u8f91\u5668\u521b\u5efa\u63a7\u5236\u53f0"
   ],
   "Create New View for Output": [
       "\u4e3a\u8f93\u51fa\u521b\u5efa\u65b0\u89c6\u56fe"
   ],
   "Create a new markdown file": [
       "\u65b0\u5efaMarkdown\u6587\u4ef6"
   ],
   "Create a new notebook": [
       "\u521b\u5efa\u7b14\u8bb0\u672c"
   ],
   "Create a new text file": [
       "\u65b0\u5efa\u6587\u672c\u6587\u4ef6"
   ],
   "Critical": [
       "\u4e25\u91cd"
   ],
  //  "Ctrl-C": [
  //      "Ctrl+C"
  //  ],
   "Current mem usage": [
       "\u5f53\u524d\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"
   ],
   "Custom": [
       "\u81ea\u5b9a\u4e49"
   ],
   "Cut": [
       "\u526a\u5207"
   ],
   "Cut Cells": [
       "\u526a\u5207\u5355\u5143\u683c"
   ],
   "Cut the selected cells": [
       "\u526a\u5207\u9009\u4e2d\u7684\u5355\u5143\u683c"
   ],
   "Dark": [
       "\u6697\u8272"
   ],
   "Debug": [
       "\u8c03\u8bd5"
   ],
   "Debugger": [
       "\u8c03\u8bd5\u5668"
   ],
   "Decrease Code Font Size": [
       "\u51cf\u5c0f\u4ee3\u7801\u5b57\u53f7"
   ],
   "Decrease Content Font Size": [
       "\u51cf\u5c11\u5185\u5bb9\u5b57\u53f7"
   ],
   "Decrease Font Size": [
       "\u51cf\u5c0f\u5b57\u53f7"
   ],
   "Decrease Terminal Font Size": [
       "\u51cf\u5c0f\u7ec8\u7aef\u5b57\u4f53\u5927\u5c0f"
   ],
   "Decrease Text Editor Font Size": [
       "\u51cf\u5c0f\u6587\u672c\u7f16\u8f91\u5668\u5b57\u4f53\u5927\u5c0f"
   ],
   "Decrease UI Font Size": [
       "\u51cf\u5c0f\u754c\u9762\u5b57\u53f7"
   ],
   "Default Viewers": [
       "\u9ed8\u8ba4\u67e5\u770b\u5668"
   ],
   "Default cell type": [
       "\u9ed8\u8ba4\u7684\u5355\u5143\u683c\u7c7b\u578b"
   ],
   "Delete": [
       "\u5220\u9664"
   ],
    "Delete %1": [
        "\u5220\u9664 %1"
    ],
   "Delete Cells": [
       "\u5220\u9664\u5355\u5143\u683c"
   ],
   "Delimiter: ": [
       "\u5206\u9694\u7b26: "
   ],
   "Deselect All Cells": [
       "\u53d6\u6d88\u9009\u62e9\u6240\u6709\u5355\u5143\u683c"
   ],
   "Details:": [
       "\u8be6\u7ec6\u4fe1\u606f\uff1a"
   ],
   "Directory": [
       "\u76ee\u5f55"
   ],
   "Directory not found": [
       "\u627e\u4e0d\u5230\u76ee\u5f55"
   ],
    "Directory not found: \"%1\"": [
        "\u627e\u4e0d\u5230\u76ee\u5f55: \"%1\""
    ],
    "Directory: %1\n": [
        "\u76ee\u5f55: %1\n"
    ],
   "Disable": [
       "\u7981\u7528"
   ],
   "Disable Scrolling for Outputs": [
       "\u7981\u7528\u6eda\u52a8\u8f93\u51fa\u529f\u80fd"
   ],
   "Discard": [
       "\u4e22\u5f03"
   ],
   "Disclaimed Status": [
       "\u514d\u8d23\u72b6\u6001"
   ],
   "Discover": [
       "\u53d1\u73b0"
   ],
   "Dismiss": [
       "\u5ffd\u7565"
   ],
   "Distrust HTML": [
       "\u4e0d\u4fe1\u4efb\u7684HTML"
   ],
   "Do you want to leave without saving?": [
       "\u9875\u9762\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u79bb\u5f00\uff1f"
   ],
   "Document is read-only": [
       "\u6587\u6863\u4e3a\u53ea\u8bfb\u72b6\u6001"
   ],
   "Download": [
       "\u4e0b\u8f7d"
   ],
   "Download the file to your computer": [
       "\u5c06\u6587\u4ef6\u4e0b\u8f7d\u5230\u60a8\u7684\u8ba1\u7b97\u673a"
   ],
   "Duplicate": [
       "\u521b\u5efa\u526f\u672c"
   ],
  Edit: ["\u7f16\u8f91"],
   "Editor": [
       "\u7f16\u8f91\u5668"
   ],
   "Editor Configuration": [
       "\u7f16\u8f91\u5668\u914d\u7f6e"
   ],
   "Enable": [
       "\u542f\u7528"
   ],
   "Enable / Disable Debugger": [
       "\u542f\u7528/\u7981\u7528\u8c03\u8bd5\u5668"
   ],
   "Enable Extension Manager": [
       "\u542f\u7528\u6269\u5c55\u7ba1\u7406\u5668"
   ],
   "Enable Extension Manager?": [
       "\u542f\u7528\u63d2\u4ef6\u7ba1\u7406\u5668?"
   ],
   "Enable Scrolling for Outputs": [
       "\u542f\u7528\u6eda\u52a8\u8f93\u51fa\u529f\u80fd"
   ],
   "Enabled Status": [
       "\u542f\u7528\u72b6\u6001"
   ],
   "Enter Command Mode": [
       "\u8fdb\u5165\u547d\u4ee4\u6a21\u5f0f"
   ],
   "Enter Edit Mode": [
       "\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f"
   ],
   "Error": [
       "\u9519\u8bef"
   ],
   "Error\u0004Launcher Error": [
       "\u542f\u52a8\u9875\u9519\u8bef"
   ],
   "Error Loading Theme": [
       "\u52a0\u8f7d\u4e3b\u9898\u65f6\u51fa\u9519"
   ],
   "Error Registering Plugins": [
       "\u6ce8\u518c\u63d2\u4ef6\u65f6\u51fa\u9519"
   ],
   "Error communicating with server extension. Consult the documentation\n            for how to ensure that it is enabled.": [
       "\u4e0e\u670d\u52a1\u5668\u6269\u5c55\u901a\u4fe1\u51fa\u9519\u3002\u8bf7\u53c2\u8003\u6587\u6863\n            \u4ee5\u786e\u4fdd\u5b83\u5df2\u542f\u7528\u3002"
   ],
   "Error message:": [
       "\u9519\u8bef\u4fe1\u606f:"
   ],
   "Executable Script": [
       "\u53ef\u6267\u884c\u811a\u672c"
   ],
   "Execute with Enter": [
       "\u7528 Enter \u6267\u884c"
   ],
   "Execute with Shift+Enter": [
       "\u7528 Shift+Enter \u6267\u884c"
   ],
   "Expand All Code": [
       "\u5c55\u5f00\u6240\u6709\u4ee3\u7801"
   ],
   "Expand All Outputs": [
       "\u5c55\u5f00\u5168\u90e8\u8f93\u51fa"
   ],
   "Expand Selected Code": [
       "\u5c55\u5f00\u9009\u5b9a\u7684\u4ee3\u7801"
   ],
   "Expand Selected Outputs": [
       "\u5c55\u5f00\u9009\u5b9a\u7684\u8f93\u51fa"
   ],
  "Export Notebook As\u2026": [
      "\u5bfc\u51faNotebook\u4e3a\u2026"
  ],
  "Export Notebook: %1": [
      "\u5bfc\u51faNotebook\uff1a%1"
  ],
  "Export Notebook to Asciidoc": [
    "\u5bfc\u51faNotebook\uff1a Asciidoc"
],
"Export Notebook to HTML": [
  "\u5bfc\u51faNotebook\uff1a HTML"
],
"Export Notebook to LaTeX": [
  "\u5bfc\u51faNotebook\uff1a LaTeX"
],
"Export Notebook to Markdown": [
  "\u5bfc\u51faNotebook\uff1a Markdown"
],
"Export Notebook to ReStructured Text": [
  "\u5bfc\u51faNotebook\uff1a ReStructured\u6587\u672c"
],
"Export Notebook to Executable Script": [
  "\u5bfc\u51faNotebook\uff1a Executable\u811a\u672c"
],
"Export Notebook to Reveal.js Slides": [
  "\u5bfc\u51faNotebook\uff1a Reveal.js\u5e7b\u706f\u7247"
],
   "Extend Selection Above": [
       "\u5411\u4e0a\u65b9\u6269\u5c55\u9009\u533a"
   ],
   "Extend Selection Below": [
       "\u5411\u4e0b\u65b9\u6269\u5c55\u9009\u533a"
   ],
   "Extend Selection to Bottom": [
       "\u5c06\u9009\u533a\u6269\u5c55\u5230\u5e95\u90e8"
   ],
   "Extend Selection to Top": [
       "\u5c06\u9009\u533a\u6269\u5c55\u5230\u9876\u90e8"
   ],
   "Extension Installation Error": [
       "\u6269\u5c55\u5b89\u88c5\u51fa\u9519"
   ],
   "Extension Manager": [
       "\u63d2\u4ef6\u7ba1\u7406\u5668"
   ],
  File: ["\u6587\u4ef6"],
   "File Browser": [
       "\u6587\u4ef6\u7ba1\u7406\u5668"
   ],
    "File Browser (%1)": [
        "\u6587\u4ef6\u6d4f\u89c8\u5668 (%1)"
    ],
   "File Changed": [
       "\u6587\u4ef6\u5df2\u66f4\u6539"
   ],
    "File Load Error for %1": [
        "\u52a0\u8f7d\u6587\u4ef6 %1 \u65f6\u51fa\u9519"
    ],
   "File Operations": [
       "\u6587\u4ef6\u64cd\u4f5c"
   ],
   "File Overwrite?": [
       "\u8981\u8986\u76d6\u6587\u4ef6\u5417\uff1f"
   ],
   "File Path": [
       "\u6587\u4ef6\u8def\u5f84"
   ],
    "File Save Error for %1": [
        "\u4fdd\u5b58\u6587\u4ef6 %1 \u65f6\u51fa\u9519"
    ],
   "Files still uploading": [
       "\u6587\u4ef6\u8fd8\u5728\u4e0a\u4f20"
   ],
   "Filter files by name": [
       "\u6309\u6587\u4ef6\u540d\u8fc7\u6ee4"
   ],
   "Filter on file name with a fuzzy search": [
       "\u8fc7\u6ee4\u6587\u4ef6\u540d\u65f6\u4f7f\u7528\u6a21\u7cca\u641c\u7d22"
   ],
   "Filter\u2026": [
       "\u7b5b\u9009\u2026"
   ],
   "Find": [
       "\u67e5\u627e"
   ],
   "Find Next": [
       "\u67e5\u627e\u4e0b\u4e00\u4e2a"
   ],
   "Find Previous": [
       "\u67e5\u627e\u4e0a\u4e00\u4e2a"
   ],
   "Find and Replace\u2026": [
       "\u67e5\u627e\u548c\u66ff\u6362\u2026"
   ],
   "Find\u2026": [
       "\u67e5\u627e\u2026"
   ],
   "Find\u2026": [
       "\u67e5\u627e\u2026"
   ],
   "Flip image horizontally": [
       "\u6c34\u5e73\u7ffb\u8f6c\u56fe\u7247"
   ],
   "Flip image vertically": [
       "\u5782\u76f4\u7ffb\u8f6c\u56fe\u7247"
   ],
   "Font Family": [
       "\u5b57\u4f53\u96c6"
   ],
   "Font Size": [
       "\u5b57\u4f53\u5927\u5c0f"
   ],
   "Font family": [
       "\u5b57\u4f53\u96c6"
   ],
   "Font size": [
       "\u5b57\u4f53\u5927\u5c0f"
   ],
   "For Notebook:": [
       "\u5bf9 Notebook:"
   ],
    "For Notebook: %1": [
        "\u5bf9 Notebook: %1"
    ],
   "For more information, see the <a href=\"https:jupyter-notebook.readthedocs.io/en/stable/security.html\">%1</a>": [
       "\u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 <a href=\"https:jupyter-notebook.readthedocs.io/en/stable/security.html\">%1</a>"
   ],
   "Fragment": [
       "\u7247\u6bb5"
   ],
   "Go to Line": [
       "\u8df3\u8f6c\u5230\u884c"
   ],
   "Go to Line\u2026": [
       "\u8df3\u81f3\u884c\u2026"
   ],
   "Go to Line\u2026": [
       "\u8df3\u81f3\u884c\u2026"
   ],
    "Go to line number between 1 and %1": [
        "\u8df3\u8f6c\u5230 1 \u548c %1 \u4e4b\u95f4\u7684\u884c\u53f7"
    ],
   "Go to line number\u2026": [
       "\u8f6c\u5230\u884c\u53f7\u2026"
   ],
  //  "HTML": [
  //      "HTML"
  //  ],
   "HTML File": [
       "HTML \u6587\u4ef6"
   ],
   "HTML Viewer": [
       "HTML \u67e5\u770b\u5668"
   ],
   "Handle Local Link": [
       "\u5904\u7406\u672c\u5730\u94fe\u63a5"
   ],
  Help: ["\u5e2e\u52a9"],
   "Hide Front Matter": [
       "\u9690\u85cfYAML\u5934\u90e8"
   ],
  //  "Hub": [
  //      "Hub"
  //  ],
   "Hub Control Panel": [
       "Hub\u63a7\u5236\u9762\u677f"
   ],
   "Ignore": [
       "\u5ffd\u7565"
   ],
   "Image": [
       "\u56fe\u7247"
   ],
   "Image Viewer": [
       "\u56fe\u50cf\u67e5\u770b\u5668"
   ],
   "Increase Code Font Size": [
       "\u589e\u5927\u4ee3\u7801\u5b57\u53f7"
   ],
   "Increase Content Font Size": [
       "\u589e\u5927\u5185\u5bb9\u5b57\u53f7"
   ],
   "Increase Font Size": [
       "\u589e\u5927\u5b57\u53f7"
   ],
   "Increase Terminal Font Size": [
       "\u589e\u52a0\u7ec8\u7aef\u5b57\u4f53\u5927\u5c0f"
   ],
   "Increase Text Editor Font Size": [
       "\u589e\u52a0\u6587\u672c\u7f16\u8f91\u5668\u5b57\u4f53\u5927\u5c0f"
   ],
   "Increase UI Font Size": [
       "\u589e\u5927\u754c\u9762\u5b57\u53f7"
   ],
   "Indent with Tab": [
       "\u4f7f\u7528Tab\u7f29\u8fdb"
   ],
   "Info": [
       "\u4fe1\u606f"
   ],
   "Inherit": [
       "\u7e7c\u627f"
   ],
   "Insert Cell Above": [
       "\u4e0a\u65b9\u63d2\u5165\u5355\u5143\u683c"
   ],
   "Insert Cell Below": [
       "\u4e0b\u65b9\u63d2\u5165\u5355\u5143\u683c"
   ],
   "Insert Line Break": [
       "\u63d2\u5165\u6362\u884c\u7b26"
   ],
   "Insert a cell below": [
       "\u4e0b\u65b9\u63d2\u5165\u5355\u5143\u683c"
   ],
   "Inspect Variable": [
       "\u68c0\u67e5\u53d8\u91cf"
   ],
   "Install": [
       "\u5b89\u88c5"
   ],
   "Install the JupyterLab extension.": [
       "\u5b89\u88c5 JupyterLab \u6269\u5c55\u3002"
   ],
   "Installed": [
       "\u5df2\u5b89\u88c5"
   ],
   "Interaction mode": [
       "\u4ea4\u4e92\u6a21\u5f0f"
   ],
   "Interrupt Kernel": [
       "\u4e2d\u65ad\u5185\u6838"
   ],
   "Interrupt the kernel": [
       "\u4e2d\u65ad\u5185\u6838"
   ],
   "Invert Colors": [
       "\u53cd\u8272"
   ],
   "JSON File": [
       "JSON \u6587\u4ef6"
   ],
   "JavaScript output is disabled in JupyterLab": [
       "JavaScript \u8f93\u51fa\u5728 JupyterLab \u4e2d\u88ab\u7981\u7528"
   ],
   "Jupyter Reference": [
       "Jupyter\u53c2\u8003\u6587\u6863"
   ],
   "Jupyter security documentation": [
       "Jupyter \u5b89\u5168\u6587\u6863"
   ],
   "JupyterLab Dark": [
       "JupyterLab \u6697\u8272"
   ],
   "JupyterLab FAQ": [
       "JupyterLab\u5e38\u89c1\u95ee\u9898"
   ],
   "JupyterLab Light": [
       "JupyterLab \u4eae\u8272"
   ],
   "JupyterLab Reference": [
       "Jupyter\u53c2\u8003\u6587\u6863"
   ],
   "JupyterLab Theme": [
       "JupyterLab \u4e3b\u9898"
   ],
   "JupyterLab build is suggested:": [
       "\u5efa\u8bae\u8fdb\u884cJupyterlab Build\u6765\u91cd\u65b0\u6784\u5efa"
   ],
   "JupyterLab workspace File": [
       "JupyterLab \u5de5\u4f5c\u533a\u6587\u4ef6"
   ],
   "Keep Waiting": [
       "\u7ee7\u7eed\u7b49\u5f85"
   ],
  Kernel: ["\u5185\u6838"],
    "Kernel %1": [
        "\u5185\u6838 %1"
    ],
   "Kernel Companions": [
       "\u5185\u6838\u4f34\u4fa3"
   ],
   "Kernel Operations": [
       "\u5185\u6838\u64cd\u4f5c"
   ],
   "Kernel Restarting": [
       "\u5185\u6838\u91cd\u542f\u4e2d"
   ],
   "Kernel Terminating": [
       "\u5185\u6838\u7ec8\u6b62\u4e2d"
   ],
   "Kernel and Server Companions": [
       "\u5185\u6838\u548c\u670d\u52a1\u4f34\u4fa3"
   ],
   "Kernel: %1": [
       "\u5185\u6838: %1"
   ],
   "Kernels": [
       "\u5185\u6838"
   ],
   "Key Map": [
       "\u6309\u952e\u6620\u5c04"
   ],
  //  "LaTeX": [
  //      "LaTeX"
  //  ],
   "Language": [
       "\u8bed\u8a00"
   ],
   "Language locale": [
       "\u8bed\u8a00\u533a\u57df\u8bbe\u7f6e"
   ],
   "Large file size warning": [
       "\u5927\u578b\u6587\u4ef6\u8b66\u544a"
   ],
   "Last Checkpoint: %1": [
       "\u4e0a\u4e00\u68c0\u67e5\u70b9: %1"
   ],
   "Last Modified": [
       "\u4fee\u6539\u65f6\u95f4"
   ],
   "Last Saved: %1\n": [
       "\u4e0a\u6b21\u4fdd\u5b58: %1\n"
   ],
   "Launch Classic Notebook": [
       "\u542f\u52a8\u7ecf\u5178Notebook"
   ],
   "Launcher": [
       "\u542f\u52a8\u9875"
   ],
   "Light": [
       "\u4eae\u8272"
   ],
   "Line Height": [
       "\u884c\u9ad8"
   ],
   "Line Numbers": [
       "\u884c\u53f7"
   ],
   "Line Width": [
       "\u884c\u5bbd"
   ],
   "Line height": [
       "\u884c\u9ad8"
   ],
   "Live updating code documentation from the active kernel": [
       "\u4ece\u6d3b\u52a8\u5185\u6838\u4e2d\u5b9e\u65f6\u66f4\u65b0\u4ee3\u7801\u6587\u6863"
   ],
   "Ln %1, Col %2": [
       "\u884c %1, \u5217 %2"
   ],
   "Loading\u2026": [
       "\u52a0\u8f7d\u4e2d\u2026"
   ],
   "Log Console": [
       "\u65e5\u5fd7\u63a7\u5236\u53f0"
   ],
   "Log Level:": [
       "\u65e5\u5fd7\u7ea7\u522b\uff1a"
   ],
   "Log Out": [
       "\u6ce8\u9500"
   ],
   "Log entry count limit": [
       "\u65e5\u5fd7\u6761\u76ee\u6570\u91cf\u9650\u5236"
   ],
   "Log level": [
       "\u65e5\u5fd7\u7ea7\u522b"
   ],
   "Log out of JupyterLab": [
       "\u9000\u51faJupyterLab"
   ],
   "Log out of the Hub": [
       "\u9000\u51faHub"
   ],
   "Log: %1": [
       "\u65e5\u5fd7: %1"
   ],
   "Main Area": [
       "\u4e3b\u5de5\u4f5c\u533a"
   ],
  //  "Markdown": [
  //      "Markdown"
  //  ],
  "Markdown Cell Configuration": [
      "Markdown \u5355\u5143\u683c\u914d\u7f6e"
  ],
  "Markdown File": [
      "Markdown \u6587\u4ef6"
  ],
  "Markdown Preview": [
      "Markdown \u9884\u89c8"
  ],
  "Markdown Reference": [
      "Markdown\u53c2\u8003\u6587\u6863"
  ],
   "Match Brackets": [
       "\u9ad8\u4eae\u663e\u793a\u62ec\u53f7\u5bf9"
   ],
   "Mem: %1 %2": [
       "\u5185\u5b58\uff1a%1 %2"
   ],
   "Mem: %1 / %2 %3": [
       "\u5185\u5b58: %1 / %2 %3"
   ],
   "Merge Selected Cells": [
       "\u5408\u5e76\u6240\u9009\u5355\u5143\u683c"
   ],
   "Mode: %1": [
       "\u6a21\u5f0f\uff1a%1"
   ],
   "Move Cells Down": [
       "\u4e0b\u79fb\u5355\u5143\u683c"
   ],
   "Move Cells Up": [
       "\u4e0a\u79fb\u5355\u5143\u683c"
   ],
   "Move Error": [
       "\u79fb\u52a8\u51fa\u9519"
   ],
  Name: ["\u540d\u79f0"],
   "Name: %1": [
       "\u540d\u79f0\uff1a%1"
   ],
   "Name: %1\n": [
       "\u540d\u79f0\uff1a%1\n"
   ],
   "Name: %1\nPath: %2\n": [
       "\u540d\u79f0: %1\n\u8def\u5f84: %2\n"
   ],
   "Navigate to current directory": [
       "\u5bfc\u822a\u5230\u5f53\u524d\u76ee\u5f55"
   ],
   "Neither theme %1 nor default %2 loaded.": [
       "\u4e3b\u9898 %1 \u53ca\u9ed8\u8ba4 %2 \u5747\u672a\u52a0\u8f7d\u3002"
   ],
  New: ["\u65b0\u5efa"],
  "New Console": ["\u65b0\u63a7\u5236\u53f0"],
  "New Console for Activity": ["\u65b0\u5efa\u6d3b\u52a8\u63a7\u5236\u53f0"],
  "New Console for Editor": ["\u65b0\u5efa\u7f16\u8f91\u5668\u63a7\u5236\u53f0"],
  "New Console for Notebook": ["\u65b0\u5efaNotebook\u63a7\u5236\u53f0"],
  "New File": ["\u65b0\u5efa\u6587\u4ef6"],
  "New Folder": ["\u65b0\u5efa\u6587\u4ef6\u5939"],
  "New Launcher": ["\u65b0\u5efa\u542f\u52a8\u9875"],
  "New Markdown File": ["\u65b0\u5efaMarkdown\u6587\u4ef6"],
  "New Name": ["\u65b0\u540d\u79f0"],
  "New Notebook": ["\u65b0\u5efa\u7b14\u8bb0\u672c"],
  "New Terminal": ["\u65b0\u5efa\u7ec8\u7aef"],
  "New Text File": ["\u65b0\u5efa\u6587\u672c\u6587\u4ef6"],
  "New View for ": ["\u65b0\u89c6\u56fe"],
  "New View for %1": ["%1 \u7684\u65b0\u89c6\u56fe"],
  "New View for Notebook": ["Notebook \u7684\u65b0\u89c6\u56fe"],
  "New View for Python File": ["Python \u6587\u4ef6\u7684\u65b0\u89c6\u56fe"],
  "New View for File": ["\u6587\u4ef6\u7684\u65b0\u89c6\u56fe"],
  "New View for Markdown File": [
    "Markdown\u6587\u4ef6\u7684\u65b0\u89c6\u56fe",
  ],
  "New View for %1": ["%1 \u7684\u65b0\u89c6\u56fe"],
   "Next": [
       "\u4e0b\u4e00\u6b65"
   ],
   "No Kernel!": [
       "\u65e0\u5185\u6838!"
   ],
   "No Tags Available": [
       "\u6ca1\u6709\u53ef\u7528\u6807\u7b7e"
   ],
   "No browser for path": [
       "\u8def\u5f84\u6ca1\u6709\u6d4f\u89c8\u5668"
   ],
   "No context found for current widget!": [
       "\u6ca1\u6709\u627e\u5230\u5f53\u524d\u90e8\u4ef6\u7684\u4e0a\u4e0b\u6587\uff01"
   ],
   "No data!": [
       "\u65e0\u6570\u636e\uff01"
   ],
   "No entries": [
       "\u65e0\u6761\u76ee"
   ],
   "No errors found": [
       "\u672a\u53d1\u73b0\u9519\u8bef"
   ],
   "No log messages.": [
       "\u65e0\u65e5\u5fd7\u6d88\u606f\u3002"
   ],
   "No properties to inspect.": [
       "\u6ca1\u6709\u8981\u67e5\u770b\u7684\u5c5e\u6027\u3002"
   ],
   "No source selected.": [
       "\u672a\u9009\u62e9\u6e90\u6587\u4ef6"
   ],
   "Note: To disable a system default shortcut,\ncopy it to User Preferences and add the\n\"disabled\" key, for example:\n{\n    \"command\": \"application:activate-next-tab\",\n    \"keys\": [\n        \"Ctrl Shift ]\"\n    ],\n    \"selector\": \"body\",\n    \"disabled\": true\n}\n\nList of commands followed by keyboard shortcuts:\n%1\n\nList of keyboard shortcuts:": [
       "\u6ce8\u610f\uff0c\u8981\u7981\u7528\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5feb\u6377\u952e\n\u8bf7\u590d\u5236\u5b83\u5230\u7528\u6237\u559c\u597d\u8bbe\u7f6e\u5e76\u6dfb\u52a0\n\"disabled\" \u952e, \u6bd4\u5982:\n{\n    \"command\": \"application:activate-next-tab\",\n    \"keys\": [\n        \"Ctrl Shift ]\"\n    ],\n    \"selector\": \"body\",\n    \"disabled\": true\n}\n\n\u6709\u5feb\u6377\u952e\u7684\u547d\u4ee4\u5217\u8868:\n%1\n\n\u5feb\u6377\u952e\u5217\u8868:"
   ],
  //  "Notebook": [
  //      "Notebook"
  //  ],
   "Notebook Cell Operations": [
       "Notebook\u5355\u5143\u683c\u64cd\u4f5c"
   ],
   "Notebook Metadata": [
       "Notebook\u5143\u6570\u636e"
   ],
   "Notebook Operations": [
       "Notebook\u64cd\u4f5c"
   ],
   "Notebook Tools": [
       "Notebook\u5de5\u5177"
   ],
   "Notebook converted": [
       "Notebook\u5df2\u8f6c\u6362"
   ],
   "Notebook is already trusted": [
       "Notebook\u5df2\u88ab\u4fe1\u8d56\u3002"
   ],
   "Notebook is in %1 mode": [
       "Notebook\u5904\u4e8e %1 \u6a21\u5f0f"
   ],
   "Notebook not trusted: %1 of %2 cells trusted.": [
       "\u4e0d\u53d7\u4fe1\u4efb\u7684\u7b14\u8bb0\u672c: %1 / %2\u4e2a\u5355\u5143\u683c\u53d7\u4fe1\u4efb\u3002"
   ],
   "Notebook trusted: %1 of %2 cells trusted.": [
       "\u53d7\u4fe1\u4efb\u7684\u7b14\u8bb0\u672c: %1 / %2\u4e2a\u5355\u5143\u683c\u53d7\u4fe1\u4efb\u3002"
   ],
   "Notes": [
       "\u5907\u6ce8"
   ],
   "OK": [
       "\u786e\u5b9a"
   ],
   "Ok": [
       "\u786e\u8ba4"
   ],
  Open: ["\u6253\u5f00"],
  "Open %1": ["\u6253\u5f00 %1"],
  "Open Edit Menu": ["\u6253\u5f00\u7f16\u8f91\u83dc\u5355"],
  "Open Error": ["\u6253\u5f00\u51fa\u9519"],
  "Open File Menu": ["\u6253\u5f00\u6587\u4ef6\u83dc\u5355"],
  "Open First Menu": ["\u6253\u5f00\u9996\u4e2a\u83dc\u5355"],
  "Open Help Menu": ["\u6253\u5f00\u5e2e\u52a9\u83dc\u5355"],
  "Open Kernel Menu": ["\u6253\u5f00\u5185\u6838\u83dc\u5355"],
  "Open Path": ["\u6253\u5f00\u8def\u5f84"],
  "Open Run Menu": ["\u6253\u5f00\u8fd0\u884c\u83dc\u5355"],
  "Open Settings Menu": ["\u6253\u5f00\u8bbe\u7f6e\u83dc\u5355"],
  "Open Tabs": ["\u5f00\u542f\u7684\u6807\u7b7e\u9875"],
  "Open Tabs Menu": ["\u6253\u5f00\u6807\u7b7e\u9875\u83dc\u5355"],
  "Open View Menu": ["\u6253\u5f00\u89c6\u56fe\u83dc\u5355"],
  "Open With": ["\u6253\u5f00\u65b9\u5f0f"],
  "Open from Path\u2026": ["\u4ece\u8def\u5f84\u6253\u5f00\u2026"],
  "Open from path": ["\u4ece\u8def\u5f84\u6253\u5f00"],
  "Open in New Browser Tab": [
    "\u5728\u65b0\u7684\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u4e2d\u6253\u5f00",
  ],
  "Open in the Main Area": ["\u5728\u4e3b\u533a\u57df\u6253\u5f00"],
  "Open the Hub control panel in a new browser tab": [
    "\u5728\u65b0\u7684\u6e38\u89c8\u5668\u9009\u9879\u5361\u4e2d\u6253\u5f00Hub\u63a7\u5236\u9762\u677f",
  ],
   "Other": [
       "\u5176\u4ed6"
   ],
   "Overrides": [
       "\u8986\u76d6"
   ],
   "Overrides for the default viewers for file types.\nSpecify a mapping from file type name to document viewer name, for example:\n\ndefaultViewers: {\n  markdown: \"Markdown Preview\"\n}\n\nIf you specify non-existent file types or viewers, or if a viewer cannot\nopen a given file type, the override will not function.\n\nAvailable viewers:\n%1\n\nAvailable file types:\n%2": [
       "\u8986\u76d6\u6587\u4ef6\u7c7b\u578b\u5bf9\u5e94\u7684\u9ed8\u8ba4\u67e5\u770b\u5668\u3002\n\u8bf7\u6307\u5b9a\u4ece\u6587\u4ef6\u7c7b\u578b\u5230\u67e5\u770b\u5668\u540d\u79f0\u7684\u6620\u5c04\uff0c \u4f8b\u5982\uff1a\n\ndefaultViewers: {\n  markdown: \"Markdown Preview\"\n}\n\n\u5982\u679c\u60a8\u6307\u5b9a\u4e86\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\u7c7b\u578b\u6216\u67e5\u770b\u5668\uff0c \u6216\u8005\u5982\u679c\u67e5\u770b\u5668\u65e0\u6cd5\n\u6253\u5f00\u6307\u5b9a\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u8986\u76d6\u5c06\u4e0d\u4f1a\u751f\u6548\u3002\n\n\u53ef\u7528\u7684\u67e5\u770b\u5668\uff1a\n%1\n\n\u53ef\u7528\u7684\u6587\u4ef6\u7c7b\u578b\uff1a\n%2"
   ],
   "Overwrite": [
       "\u8986\u76d6"
   ],
   "Overwrite file?": [
       "\u8986\u76d6\u6587\u4ef6\uff1f"
   ],
  //  "PDF": [
  //      "PDF"
  //  ],
   "Paste": [
       "\u7c98\u8d34"
   ],
   "Paste Cells Above": [
       "\u5728\u4e0a\u65b9\u7c98\u8d34\u5355\u5143\u683c"
   ],
   "Paste Cells Below": [
       "\u5728\u4e0b\u9762\u7c98\u8d34\u5355\u5143\u683c"
   ],
   "Paste Cells and Replace": [
       "\u7c98\u8d34\u5355\u5143\u683c\u5e76\u66ff\u6362"
   ],
   "Paste cells from the clipboard": [
       "\u4ece\u526a\u8d34\u677f\u7c98\u8d34\u5355\u5143\u683c"
   ],
   "Paste with Ctrl+V": [
       "\u4f7f\u7528 Ctrl+V \u7c98\u8d34"
   ],
   "Path": [
       "\u8def\u5f84"
   ],
   "Path Not Found": [
       "\u672a\u627e\u5230\u8def\u5f84"
   ],
   "Path: %1\nKernel: %2": [
       "\u8def\u5f84: %1\n\u5185\u6838: %2"
   ],
   "Please confirm you want to shut down JupyterLab.": [
       "\u8bf7\u786e\u8ba4\u60a8\u60f3\u8981\u5173\u95edJupyterLab\u3002"
   ],
   "Please open your browser JavaScript console for bug report instructions": [
       "\u8bf7\u6253\u5f00\u60a8\u7684\u6d4f\u89c8\u5668 JavaScript \u63a7\u5236\u53f0\u4ee5\u83b7\u53d6\u9519\u8bef\u62a5\u544a\u8bf4\u660e"
   ],
   "Presentation Mode": [
       "\u6f14\u793a\u6a21\u5f0f"
   ],
  "Print\u2026": [
      "\u6253\u5370\u2026"
  ],
  "Print...": [
    "\u6253\u5370\u2026"
],
   "Property Inspector": [
       "\u5c5e\u6027\u68c0\u67e5\u5668"
   ],
  "Python File": [
      "Python \u6587\u4ef6"
  ],
   "R File": [
       "R \u6587\u4ef6"
   ],
   "Raw": [
       "\u539f\u59cb"
   ],
   "Raw Cell Configuration": [
       "\u539f\u59cb\u5355\u5143\u683c\u914d\u7f6e"
   ],
   "Raw NBConvert Format": [
       "\u539f\u59cbNBConvert\u683c\u5f0f"
   ],
   "ReStructured Text": [
       "ReStructured \u6587\u672c"
   ],
   "Read more in the JupyterLab documentation.": [
       "\u5728 JupyterLab \u6587\u6863\u4e2d\u9605\u8bfb\u66f4\u591a\u5185\u5bb9\u3002"
   ],
   "Read-only": [
       "\u53ea\u8bfb"
   ],
   "Reason given:": [
       "\u539f\u56e0\uff1a"
   ],
   "Rebuild": [
       "\u91cd\u5efa"
   ],
   "Reconnect To Kernel": [
       "\u91cd\u65b0\u8fde\u63a5\u5230\u5185\u6838"
   ],
   "Recording timing": [
       "\u8bb0\u5f55\u8ba1\u65f6\u6570\u636e"
   ],
   "Redo": [
       "\u91cd\u505a"
   ],
   "Redo Cell Operation": [
       "\u91cd\u505a\u5355\u5143\u683c\u64cd\u4f5c"
   ],
   "Refresh File List": [
       "\u5237\u65b0\u6587\u4ef6\u5217\u8868"
   ],
   "Refresh List": [
       "\u5237\u65b0\u5217\u8868"
   ],
   "Refresh Terminal": [
       "\u5237\u65b0\u7ec8\u7aef"
   ],
   "Refresh extension list": [
       "\u5237\u65b0\u6269\u5c55\u5217\u8868"
   ],
   "Refresh the current terminal session": [
       "\u5237\u65b0\u5f53\u524d\u7ec8\u7aef\u4f1a\u8bdd"
   ],
  "Reload": [
      "\u91cd\u65b0\u52a0\u8f7d"
  ],
  "Reload %1 from Disk": [
      "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d %1"
  ],
  "Reload Markdown File from Disk": [
    "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d Markdown\u6587\u4ef6"
],
"Reload Notebook from Disk": [
  "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d Notebook"
],
"Reload Python File from Disk": [
  "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d Python \u6587\u4ef6"
],
"Reload File from Disk": [
  "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d\u6587\u4ef6"
],
  "Reload from Disk": [
    "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d"
],
"Reload  from Disk": [
  "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d"
],
  "Reload Without Saving": [
      "\u91cd\u65b0\u52a0\u8f7d\u4e14\u4e0d\u4fdd\u5b58\u5f53\u524d\u66f4\u6539"
  ],
  "Reload contents from disk": [
      "\u4ece\u78c1\u76d8\u91cd\u65b0\u52a0\u8f7d\u5185\u5bb9"
  ],
  "Remove All Breakpoints": [
      "\u79fb\u9664\u6240\u6709\u65ad\u70b9"
  ],
  "Rename": [
      "\u91cd\u547d\u540d"
  ],
  "Rename …": [
    "\u91cd\u547d\u540d..."
],
"Rename Notebook…": [
  "\u91cd\u547d\u540d Notebook..."
],
  "Rename %1\u2026": [
      "\u91cd\u547d\u540d %1\u2026"
  ],
  "Rename Error": [
      "\u91cd\u547d\u540d\u9519\u8bef"
  ],
  "Rename File": [
      "\u91cd\u547d\u540d\u6587\u4ef6"
  ],
  "Rename Python File…": [
    "\u91cd\u547d\u540d Python \u6587\u4ef6..."
],
"Rename Markdown File…": [
  "\u91cd\u547d\u540d Markdown \u6587\u4ef6..."
],
  "Rename File…": [
    "\u91cd\u547d\u540d\u6587\u4ef6..."
],
   "Render All Markdown Cells": [
       "\u6e32\u67d3\u5168\u90e8Markdown"
   ],
   "Render Timeout": [
       "\u6e32\u67d3\u8d85\u65f6\u65f6\u95f4"
   ],
   "Renderer Failure: %1": [
       "\u6e32\u67d3\u5931\u8d25\uff1a %1"
   ],
   "Replace": [
       "\u66ff\u6362"
   ],
   "Replace All": [
       "\u66ff\u6362\u5168\u90e8"
   ],
   "Replace Selection in Console": [
       "\u5728\u63a7\u5236\u53f0\u4e2d\u66ff\u6362\u9009\u62e9"
   ],
   "Replace Selection in Editor": [
       "\u5728\u7f16\u8f91\u5668\u4e2d\u66ff\u6362\u9009\u62e9"
   ],
   "Replace Selection in Notebook Cell": [
       "\u5728Notebook\u5355\u5143\u683c\u4e2d\u66ff\u6362\u9009\u62e9"
   ],
   "Request that the Hub restart this server": [
       "\u8bf7\u6c42Hub\u91cd\u542f\u6b64\u670d\u52a1\u5668"
   ],
   "Rerender HTML Document": [
       "\u6e32\u67d3HTML\u6587\u6863"
   ],
   "Reset Application State": [
       "\u91cd\u7f6e\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001"
   ],
   "Reset Image": [
       "\u91cd\u7f6e\u56fe\u7247"
   ],
  Restart: ["\u91cd\u65b0\u542f\u52a8"],
  "Restart Kernel and Clear All Outputs\u2026": [
    "\u91cd\u542f\u670d\u52a1\u5e76\u6e05\u9664\u6240\u6709\u8f93\u51fa\u2026",
  ],
  "Restart Kernel and Clear Console": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u6e05\u7a7a\u63a7\u5236\u53f0",
  ],
  "Restart Kernel and Clear\u2026": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u6e05\u9664\u2026",
  ],
  "Restart Kernel and Run All\u2026": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u8fd0\u884c\u6240\u6709\u2026",
  ],
  "Restart Kernel and Run All": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u8fd0\u884c\u6240\u6709",
  ],
  "Restart Kernel and Run All Cells\u2026": [
    "\u91cd\u542f\u670d\u52a1\u5e76\u8fd0\u884c\u6240\u6709\u4ee3\u7801\u5757\u2026",
  ],
  "Restart Kernel and Run All Code": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u8fd0\u884c\u6240\u6709\u4ee3\u7801",
  ],
  "Restart Kernel and Run up to Selected Cell\u2026": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\u5e76\u8fd0\u884c\u5230\u6240\u9009\u5355\u5143\u683c\u2026",
  ],
  "Restart Kernel\u2026": ["\u91cd\u542f\u5185\u6838\u2026"],
  "Restart Server": ["\u91cd\u65b0\u542f\u52a8\u670d\u52a1\u5668"],
  "Restart the kernel": ["\u91cd\u542f\u5185\u6838"],
  "Restart the kernel, then re-run the whole notebook": [
    "\u91cd\u65b0\u542f\u52a8\u5185\u6838\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u6574\u4e2aNotebook",
  ],
   "Reveal.js Slides": [
       "Reveal.js \u5e7b\u706f\u7247"
   ],
  "Revert": [
      "\u590d\u539f"
  ],
  "Revert %1 to Checkpoint": [
      "\u5c06 %1 \u6062\u590d\u5230\u68c0\u67e5\u70b9"
  ],
  "Revert to Checkpoint": [
    "\u5c06\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert  to Checkpoint": [
  "\u5c06\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
  "Revert %1 to checkpoint": [
      "\u5c06 %1 \u6062\u590d\u5230\u68c0\u67e5\u70b9"
  ],
  "Revert Python File to Checkpoint": [
    "\u5c06 Python\u6587\u4ef6\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert Markdown File to Checkpoint": [
  "\u5c06 Markdown\u6587\u4ef6\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert Notebook to Checkpoint": [
  "\u5c06 Notebook \u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert File to checkpoint": [
  "\u5c06 \u6587\u4ef6\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert File to Checkpoint": [
  "\u5c06 \u6587\u4ef6\u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
"Revert %1 to checkpoint": [
  "\u5c06 %1 \u6062\u590d\u5230\u68c0\u67e5\u70b9"
],
  "Revert User Settings": [
      "\u8fd8\u539f\u7528\u6237\u8bbe\u7f6e"
  ],
  "Revert changes to data": [
      "\u8fd8\u539f\u6570\u636e\u66f4\u6539"
  ],
  "Revert contents to previous checkpoint": [
      "\u6062\u590d\u5185\u5bb9\u5230\u524d\u4e00\u4e2a\u68c0\u67e5\u70b9"
  ],
   "Rotate Clockwise": [
       "\u987a\u65f6\u9488\u65cb\u8f6c"
   ],
   "Rotate Counterclockwise": [
       "\u9006\u65f6\u9488\u65cb\u8f6c"
   ],
  Run: ["\u8fd0\u884c"],
  "Run All": ["\u8fd0\u884c\u6240\u6709"],
  "Run All Above Selected Cell": [
    "\u8fd0\u884c\u9009\u4e2d\u5355\u5143\u683c\u4e0a\u65b9\u7684\u6240\u6709\u5355\u5143\u683c",
  ],
  "Run All Cells": ["\u8fd0\u884c\u6240\u6709\u5355\u5143\u683c"],
  "Run All Code": ["\u8fd0\u884c\u5168\u90e8\u4ee3\u7801"],
  "Run Cell": ["\u8fd0\u884c\u5355\u5143\u683c"],
  "Run Cell (forced)": ["\u8fd0\u884c\u5355\u5143\u683c (\u5f3a\u5236)"],
  "Run Cell (unforced)": [
    "\u8fd0\u884c\u5355\u5143\u683c (\u975e\u5f3a\u5236)",
  ],
  "Run Code": ["\u8fd0\u884c\u4ee3\u7801"],
  "Run First Enabled Command": [
    "\u8fd0\u884c\u7b2c\u4e00\u4e2a\u542f\u7528\u7684\u547d\u4ee4",
  ],
  "Run Selected": ["\u8fd0\u884c\u9009\u5b9a\u5355\u5143\u683c"],
  "Run Selected Cell and All Below": [
    "\u8fd0\u884c\u9009\u4e2d\u7684\u5355\u5143\u683c\u53ca\u4ee5\u4e0b\u6240\u6709",
  ],
  "Run Selected Cells": ["\u8fd0\u884c\u9009\u4e2d\u7684\u5355\u5143\u683c"],
  "Run Selected Cells and Don't Advance": [
    "\u4ec5\u8fd0\u884c\u9009\u4e2d\u7684\u5355\u5143\u683c\u4e14\u4e0d\u524d\u8fdb",
  ],
  "Run Selected Cells and Insert Below": [
    "\u8fd0\u884c\u9009\u4e2d\u7684\u5355\u5143\u683c\u5e76\u5728\u4e0b\u9762\u63d2\u5165",
  ],
  "Run Selected Text or Current Line in Console": [
    "\u5728\u63a7\u5236\u53f0\u4e2d\u8fd0\u884c\u6240\u9009\u6587\u672c\u6216\u5f53\u524d\u884c",
  ],
  "Run the selected cells and advance": [
    "\u8fd0\u884c\u9009\u5b9a\u7684\u5355\u5143\u683c\u5e76\u5411\u524d\u79fb\u52a8",
  ],
  "Running Terminals and Kernels": [
    "\u6b63\u5728\u8fd0\u884c\u7ec8\u7aef\u548c\u5185\u6838",
  ],
   "SEARCH": [
       "\u641c\u7d22"
   ],
   "SHUT DOWN": [
       "\u7ec8\u6b62"
   ],
  "Save ": [
      "\u4fdd\u5b58"
  ],
  "Save %1": [
      "\u4fdd\u5b58 %1"
  ],
  "Save  As…": [
    "\u53e6\u5b58\u4e3a..."
],
  "Save Python File": [
    "\u4fdd\u5b58 Python\u6587\u4ef6"
],
"Save Notebook": [
  "\u4fdd\u5b58 Notebook"
],
"Save Markdown File": [
  "\u4fdd\u5b58 Markdown\u6587\u4ef6"
],
  "Save Python File As\u2026": [
      "\u5c06 Python \u6587\u4ef6\u53e6\u5b58\u4e3a\u2026"
  ],
  "Save Markdown File As\u2026": [
    "\u5c06 Markdown \u6587\u4ef6\53e6\u5b58\u4e3a\u2026"
],
"Save Notebook As\u2026": [
  "\u5c06 Notebook \u53e6\u5b58\u4e3a\u2026"
],
"Save %1 As\u2026": [
  "\u5c06 %1 \u53e6\u5b58\u4e3a\u2026"
],
  "Save All": [
      "\u4fdd\u5b58\u5168\u90e8"
  ],
  "Save Current Workspace": [
      "\u4fdd\u5b58\u5f53\u524d\u5de5\u4f5c\u533a"
  ],
  "Save Current Workspace As\u2026": [
      "\u5c06\u5f53\u524d\u5de5\u4f5c\u533a\u53e6\u5b58\u4e3a\u2026"
  ],
  "Save Failed": [
      "\u4fdd\u5b58\u5931\u8d25"
  ],
  "Save File": [
    "\u53e6\u5b58\u6587\u4ef6"
],
  "Save File As\u2026": [
      "\u53e6\u5b58\u6587\u4ef6\u4e3a\u2026"
  ],
  "Save User Settings": [
      "\u4fdd\u5b58\u7528\u6237\u8bbe\u7f6e"
  ],
  "Save all open documents": [
      "\u4fdd\u5b58\u5168\u90e8\u6253\u5f00\u7684\u6587\u6863"
  ],
  "Save and Reload": [
      "\u4fdd\u5b58\u5e76\u91cd\u65b0\u52a0\u8f7d"
  ],
  "Save and create checkpoint": [
      "\u4fdd\u5b58\u5e76\u521b\u5efa\u68c0\u67e5\u70b9"
  ],
  "Save as": [
      "\u53e6\u5b58\u4e3a"
  ],
   "Save changes in \"%1\" before closing?": [
       "\u5173\u95ed\u524d\u662f\u5426\u8981\u4fdd\u5b58\u5bf9 \"%1\" \u7684\u4fee\u6539\uff1f"
   ],
  "Save the notebook contents and create checkpoint": [
      "\u4fdd\u5b58Notebook\u5185\u5bb9\u5e76\u521b\u5efa\u68c0\u67e5\u70b9"
  ],
  "Save with new path": [
      "\u4f7f\u7528\u65b0\u8def\u5f84\u4fdd\u5b58"
  ],
  "Save your work": [
      "\u4fdd\u5b58\u60a8\u7684\u5de5\u4f5c"
  ],
  "Saving %1": [
      "\u6b63\u5728\u4fdd\u5b58 %1"
  ],
   "Screen Reader Mode": [
       "\u5c4f\u5e55\u9605\u8bfb\u5668\u6a21\u5f0f"
   ],
   "Script": [
       "\u811a\u672c"
   ],
   "Scroll behavior": [
       "\u6eda\u52a8\u884c\u4e3a"
   ],
   "Scroll past last cell": [
       "\u6eda\u52a8\u8d85\u8fc7\u6700\u540e\u4e00\u4e2a\u5355\u5143\u683c"
   ],
   "Scrollback Buffer": [
       "\u56de\u6eda\u7f13\u5b58"
   ],
   "Scrollbar Theming": [
       "\u6eda\u52a8\u6761\u4e3b\u9898"
   ],
   "Search Results": [
       "\u641c\u7d22\u7ed3\u679c"
   ],
   "Search on File Names": [
       "\u641c\u7d22\u6587\u4ef6\u540d"
   ],
   "Select": [
       "\u9009\u62e9"
   ],
   "Select All": [
       "\u5168\u9009"
   ],
   "Select All Cells": [
       "\u9009\u62e9\u6240\u6709\u5355\u5143\u683c"
   ],
   "Select Cell Above": [
       "\u9009\u62e9\u4e0a\u65b9\u5355\u5143\u683c"
   ],
   "Select Cell Below": [
       "\u9009\u62e9\u4e0b\u65b9\u5355\u5143\u683c"
   ],
   "Select a plugin from the list to view and edit its preferences.": [
       "\u4ece\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u63d2\u4ef6\u6765\u67e5\u770b\u548c\u7f16\u8f91\u5176\u9009\u9879\u3002"
   ],
   "Select current running or last run cell": [
       "\u9009\u62e9\u6b63\u5728\u8fd0\u884c\u6216\u6700\u540e\u8fd0\u884c\u7684\u5355\u5143\u683c"
   ],
   "Selected Theme": [
       "\u9009\u5b9a\u7684\u4e3b\u9898"
   ],
   "Selecting trust will re-render this notebook in a trusted state.": [
       "\u9009\u62e9\u4fe1\u4efb\u5c06\u5728\u4fe1\u4efb\u72b6\u6001\u4e0b\u91cd\u65b0\u6e32\u67d3\u6b64Notebook\u3002"
   ],
   "Selection Pointer": [
       "\u9009\u62e9\u6307\u9488"
   ],
   "Server Companion": [
       "\u670d\u52a1\u4f34\u4fa3"
   ],
   "Server Connection Error": [
       "\u670d\u52a1\u5668\u8fde\u63a5\u9519\u8bef"
   ],
   "Server Not Running": [
       "\u670d\u52a1\u5668\u672a\u8fd0\u884c"
   ],
   "Server stopped": [
       "\u670d\u52a1\u8fdb\u7a0b\u5df2\u7ec8\u6b62"
   ],
   "Set Log Level to %1": [
       "\u5c06\u65e5\u5fd7\u7ea7\u522b\u8bbe\u4e3a %1"
   ],
   "Set the terminal theme": [
       "\u8bbe\u7f6e\u7ec8\u7aef\u4e3b\u9898"
   ],
  Settings: ["\u8bbe\u7f6e"],
   "Shift+Right Click for Browser Menu": [
       "\u4f7f\u7528 Shift+\u53f3\u952e\u70b9\u51fb \u8c03\u51fa\u6d4f\u89c8\u5668\u83dc\u5355"
   ],
   "Show Active File in File Browser": [
       "\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u6d3b\u52a8\u6587\u4ef6"
   ],
   "Show All Kernel Activity": [
       "\u663e\u793a\u6240\u6709\u5185\u6838\u52a8\u6001"
   ],
   "Show Contextual Help": [
       "\u663e\u793a\u4e0a\u4e0b\u6587\u5e2e\u52a9"
   ],
   "Show Left Sidebar": [
       "\u663e\u793a\u5de6\u4fa7\u8fb9\u680f"
   ],
   "Show Line Numbers": [
       "\u663e\u793a\u884c\u53f7"
   ],
   "Show Log Console": [
       "\u663e\u793a\u65e5\u5fd7\u63a7\u5236\u53f0"
   ],
   "Show Markdown Editor": [
       "\u663e\u793aMarkdown\u7f16\u8f91\u5668"
   ],
   "Show Markdown Preview": [
       "\u663e\u793a Markdown \u9884\u89c8"
   ],
   "Show Right Sidebar": [
       "\u663e\u793a\u53f3\u4fa7\u8fb9\u680f"
   ],
   "Show Status Bar": [
       "\u663e\u793a\u72b6\u6001\u680f"
   ],
   "Show Tags Menu": [
       "\u663e\u793a\u6807\u7b7e\u83dc\u5355"
   ],
   "Show in File Browser": [
       "\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\u663e\u793a"
   ],
   "Shut Down": [
       "\u5173\u95ed"
   ],
   "Shut Down All": [
       "\u7ec8\u6b62\u6240\u6709"
   ],
   "Shut Down All Kernels\u2026": [
       "\u5173\u95ed\u6240\u6709\u5185\u6838\u2026"
   ],
   "Shut Down All?": [
       "\u5173\u95ed\u6240\u6709\u529f\u80fd\u5417\uff1f"
   ],
   "Shut Down All\u2026": [
       "\u7ec8\u6b62\u6240\u6709"
   ],
   "Shut Down Kernel": [
       "\u5173\u95ed\u5185\u6838"
   ],
   "Shut down JupyterLab": [
       "\u5173\u95ed JuputerLab"
   ],
   "Shut down all kernels?": [
       "\u7ec8\u6b62\u6240\u6709\u5185\u6838\uff1f"
   ],
   "Shut down kernel": [
       "\u5173\u95ed\u5185\u6838"
   ],
   "Shut down on close": [
       "\u5173\u95ed\u65f6\u7ec8\u6b62"
   ],
   "Shut down the Console?": [
       "\u5173\u95ed\u63a7\u5236\u53f0\uff1f"
   ],
   "Shut down the Notebook?": [
       "\u5173\u95ed\u6b64Notebook\uff1f"
   ],
   "Shut down the console?": [
       "\u5173\u95ed\u63a7\u5236\u53f0\uff1f"
   ],
   "Shut down the notebook?": [
       "\u505c\u6b62\u7b14\u8bb0\u672c\uff1f"
   ],
   "Shutdown Console": [
       "\u5173\u95ed\u63a7\u5236\u53f0"
   ],
   "Shutdown Terminal": [
       "\u5173\u95ed\u7ec8\u7aef"
   ],
   "Shutdown confirmation": [
       "\u5173\u95ed\u670d\u52a1\u786e\u8ba4"
   ],
   "Single-Document Mode": [
       "\u5355\u6587\u6863\u6a21\u5f0f"
   ],
   "Skip": [
       "\u8df3\u8fc7"
   ],
   "Slide": [
       "\u5e7b\u706f\u7247"
   ],
   "Slide Type": [
       "\u5e7b\u706f\u7247\u7c7b\u578b"
   ],
   "Slides": [
       "\u5e7b\u706f\u7247"
   ],
   "Source": [
       "\u6e90\u6587\u4ef6"
   ],
   "Spaces": [
       "\u7a7a\u683c"
   ],
   "Spaces: %1": [
       "\u7a7a\u683c\uff1a %1",
       "\u7a7a\u683c\uff1a %1"
   ],
   "Split Cell": [
       "\u62c6\u5206\u5355\u5143\u683c"
   ],
   "Start a new terminal session": [
       "\u5f00\u59cb\u4e00\u4e2a\u65b0\u7ec8\u7aef\u4f1a\u8bdd"
   ],
   "Status Bar Item flash": [
       "\u72b6\u6001\u680f\u9879\u76ee\u95ea\u70c1"
   ],
   "Status Bar Visibility": [
       "\u72b6\u6001\u680f\u53ef\u89c1\u5ea6"
   ],
   "Step In": [
       "\u6b65\u5165"
   ],
   "Step Out": [
       "\u6b65\u51fa"
   ],
   "Style Active Line": [
       "\u6837\u5f0f\u5316\u6d3b\u52a8\u884c"
   ],
   "Style Selected Text": [
       "\u6837\u5f0f\u5316\u9009\u5b9a\u7684\u6587\u672c"
   ],
   "Sub-Slide": [
       "\u5b50\u5e7b\u706f\u7247"
   ],
  //  "Sublime Text": [
  //      "Sublime Text"
  //  ],
   "Switch Sidebar Side": [
       "\u4fa7\u8fb9\u680f\u4f4d\u7f6e\u5207\u6362"
   ],
   "Switch kernel": [
       "\u5207\u6362\u5185\u6838"
   ],
   "System Defaults": [
       "\u7cfb\u7edf\u9ed8\u8ba4\u503c"
   ],
   "TSV File": [
       "TSV \u6587\u4ef6"
   ],
   "Tab Size": [
       "\u5236\u8868\u7b26\u5927\u5c0f"
   ],
   "Table / Tree View": [
       "\u8868\u683c/\u6811\u89c6\u56fe"
   ],
   "Table of Contents": [
       "\u76ee\u5f55"
   ],
  Tabs: ["\u6807\u7b7e\u9875"],
   "Tags in Notebook": [
       "\u7b14\u8bb0\u672c\u4e2d\u7684\u6807\u7b7e"
   ],
  "Terminal": [
      "\u7ec8\u7aef"
  ],
  "Terminal %1": [
      "\u7ec8\u7aef %1"
  ],
  "Terminal Theme": [
      "\u7ec8\u7aef\u4e3b\u9898"
  ],
  "Terminals": [
      "\u7ec8\u7aef"
  ],
  "Terminate": [
      "\u7ec8\u6b62"
  ],
  "Text": [
      "\u6587\u672c"
  ],
  "Text Editor": [
      "\u6587\u672c\u7f16\u8f91\u5668"
  ],
  "Text Editor Indentation": [
      "\u6587\u672c\u7f16\u8f91\u5668\u7f29\u8fdb"
  ],
  "Text Editor Key Map": [
      "\u6587\u672c\u7f16\u8f91\u5668\u6309\u952e\u6620\u5c04"
  ],
  "Text Editor Syntax Highlighting": [
      "\u6587\u672c\u7f16\u8f91\u5668\u8bed\u6cd5\u52a0\u4eae"
  ],
  "Text Editor Theme": [
      "\u6587\u672c\u7f16\u8f91\u5668\u4e3b\u9898"
  ],
  "Text File": [
      "\u6587\u672c\u6587\u4ef6"
  ],
   "Thanks for trying out JupyterLab's extension manager.\nThe JupyterLab development team is excited to have a robust\nthird-party extension community.\nHowever, we cannot vouch for every extension,\nand some may introduce security risks.\nDo you want to continue?": [
       "\u611f\u8c22\u60a8\u5c1d\u8bd5\u4e86JupyterLab\u7684\u6269\u5c55\u7ba1\u7406\u5668\u3002\nJupyterLab \u5f00\u53d1\u56e2\u961f\u5f88\u9ad8\u5174\u6709\u4e00\u4e2a\u5f3a\u5927\u7684\n\u7b2c\u4e09\u65b9\u6269\u5c55\u793e\u533a\u3002\n\u7136\u800c\uff0c\u6211\u4eec\u4e0d\u80fd\u4e3a\u5ba1\u6838\u6bcf\u4e2a\u6269\u5c55\uff0c\n\u5176\u4e2d\u4e00\u4e9b\u6269\u5c55\u53ef\u80fd\u4f1a\u5e26\u6765\u5b89\u5168\u98ce\u9669\u3002\n\u4f60\u60f3\u8981\u7ee7\u7eed\u5417\uff1f"
   ],
   "The JupyterLab development team is excited to have a robust\nthird-party extension community. However, we do not review\nthird-party extensions, and some extensions may introduce security\nrisks or contain malicious code that runs on your machine.": [
       "JupyterLab \u5f00\u53d1\u56e2\u961f\u5f88\u9ad8\u5174\u6709\u4e00\u4e2a\u5f3a\u5927\u7684\n\u7b2c\u4e09\u65b9\u6269\u5c55\u793e\u533a\u3002 \u7136\u800c\uff0c\u6211\u4eec\u4e0d\u4f1a\u5ba1\u67e5\n\u7b2c\u4e09\u65b9\u6269\u5c55\uff0c\u4e00\u4e9b\u6269\u5c55\u53ef\u80fd\u4f1a\u5e26\u6765\u5b89\u5168\n\u98ce\u9669\u6216\u5305\u542b\u60a8\u80fd\u5728\u60a8\u673a\u5668\u4e0a\u8fd0\u884c\u7684\u6076\u610f\u4ee3\u7801\u3002"
   ],
   "The checkpoint was last updated at: ": [
       "\u68c0\u67e5\u70b9\u6700\u540e\u4e00\u6b21\u66f4\u65b0\u4e8e: "
   ],
   "The extension manager is disabled. Please contact your system\nadministrator to verify the listings configuration.": [
       "\u6269\u5c55\u7ba1\u7406\u5df2\u7981\u7528\u3002\u8bf7\u8054\u7cfb\u60a8\u7684\u7cfb\u7edf\n\u7ba1\u7406\u5458\u4ee5\u9a8c\u8bc1\u5217\u8868\u914d\u7f6e\u3002"
   ],
    "The file size is %1 MB. Do you still want to upload it?": [
        "\u6587\u4ef6\u5927\u5c0f\u662f %1 MB\u3002\u60a8\u4ecd\u7136\u60f3\u8981\u4e0a\u4f20\u5b83\u5417\uff1f"
    ],
    "The kernel for %1 appears to be terminating. You can not run any cell for now.": [
        "%1 \u7684\u5185\u6838\u4f3c\u4e4e\u6b63\u5728\u7ec8\u6b62\u3002\u60a8\u73b0\u5728\u4e0d\u80fd\u8fd0\u884c\u4efb\u4f55\u5355\u5143\u683c\u3002"
    ],
    "The kernel for %1 appears to have died. It will restart automatically.": [
        "%1 \u7684\u5185\u6838\u4f3c\u4e4e\u5df2\u7ecf\u6b7b\u4ea1\u3002\u5b83\u5c06\u81ea\u52a8\u91cd\u542f\u3002"
    ],
    "The loading screen is taking a long time. \nWould you like to clear the workspace or keep waiting?": [
        "\u52a0\u8f7d\u5c4f\u5e55\u82b1\u8d39\u4e86\u5f88\u957f\u65f6\u95f4\u3002 \n\u60a8\u60f3\u8981\u6e05\u9664\u5de5\u4f5c\u533a\u8fd8\u662f\u7ee7\u7eed\u7b49\u5f85\uff1f"
    ],
    "The package <code>%1</code>, is required by the following kernels:": [
        "\u5305 <code>%1</code> \u662f\u4e0b\u5217\u5185\u6838\u5fc5\u9700\u7684:"
    ],
    "The path: %1 was not found. JupyterLab redirected to: %2": [
        "\u8def\u5f84\uff1a %1 \u672a\u627e\u5230\u3002JupyterLab \u5c06\u4f1a\u91cd\u5b9a\u5411\u5230\uff1a %2"
    ],
   "The server has some missing requirements for installing extensions.": [
       "\u670d\u52a1\u5668\u5b89\u88c5\u6269\u5c55\u65f6\u7f3a\u5c11\u4e00\u4e9b\u5fc5\u987b\u7ec4\u4ef6\u3002"
   ],
   "Theme": [
       "\u4e3b\u9898"
   ],
   "Theme CSS Overrides": [
       "\u4e3b\u9898CSS \u8986\u76d6"
   ],
   "Theme Scrollbars": [
       "\u4e3b\u9898\u6eda\u52a8\u6761"
   ],
   "This HTML output contains inline scripts. Are you sure that you want to run arbitrary Javascript within your JupyterLab session?": [
       "\u6b64 HTML \u8f93\u51fa\u5305\u542b\u5185\u5d4c\u811a\u672c\u3002\u60a8\u786e\u5b9a\u8981\u5728\u60a8\u7684 JupyterLab \u4f1a\u8bdd\u4e2d\u8fd0\u884c\u4efb\u610f\u7684 Javascript \u5417\uff1f"
   ],
   "This cannot be undone.": [
       "\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500\u3002"
   ],
   "This notebook has been converted from an newer notebook format (v%1)\nto the current notebook format (v%2).\nThe next time you save this notebook, the current notebook format (v%2) will be used.\nSome features of the original notebook may not be available.' To preserve the original format version,\nclose the notebook without saving it.": [
       "\u6b64\u7b14\u8bb0\u672c\u5df2\u4ece\u8f83\u65b0\u7684\u7b14\u8bb0\u672c\u683c\u5f0f (v%1)\n\u8f6c\u6362\u4e3a\u5f53\u524d\u7b14\u8bb0\u672c\u683c\u5f0f (v%2)\u3002\n\u4e0b\u6b21\u4fdd\u5b58\u7b14\u8bb0\u672c\u65f6\uff0c\u5f53\u524d\u7b14\u8bb0\u672c\u683c\u5f0f (v%2) \u5c06\u88ab\u4f7f\u7528\u3002\n\u539f\u7b14\u8bb0\u672c\u7684\u67d0\u4e9b\u529f\u80fd\u53ef\u80fd\u4e0d\u53ef\u7528\u3002' \u8981\u4fdd\u7559\u539f\u59cb\u683c\u5f0f\u7248\u672c\uff0c\n\u5173\u95ed\u7b14\u8bb0\u672c\u800c\u4e0d\u4fdd\u5b58\u5b83\u3002"
   ],
   "This notebook has been converted from an older notebook format (v%1)\nto the current notebook format (v%2).\nThe next time you save this notebook, the current notebook format (vthis._nbformat) will be used.\n'Older versions of Jupyter may not be able to read the new format.' To preserve the original format version,\nclose the notebook without saving it.": [
       "\u6b64\u7b14\u8bb0\u672c\u5df2\u4ece\u65e7\u7b14\u8bb0\u672c\u683c\u5f0f (v%1) \n\u8f6c\u6362\u4e3a\u5f53\u524d\u7b14\u8bb0\u672c\u683c\u5f0f (v%2)\u3002\n\u4e0b\u6b21\u4fdd\u5b58\u6b64Notebook\uff0c\u5f53\u524dNotebook \u5c06\u4f7f\u7528\u65b0\u683c\u5f0f\u3002\n\u8001\u7248\u672c\u7684Jupyter\u9879\u76ee\u53ef\u80fd\u65e0\u6cd5\u8bfb\u53d6\u65b0\u683c\u5f0f\u3002 \n\u8981\u4fdd\u7559\u539f\u59cb\u683c\u5f0f\u7248\u672c\uff0c\u8bf7\u5173\u95ed\u7b14\u8bb0\u672c\u5e76\u907f\u514d\u4fdd\u5b58\u5b83\u3002"
   ],
   "This package has indicated that it needs a corresponding kernel\npackage. Please contact your Administrator to update the server with\none of the following commands:": [
       "\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u8868\u793a\u5b83\u9700\u8981\u4e00\u4e2a\u76f8\u5e94\u7684\u5185\u6838\u5305\u3002 \u8bf7\u8054\u7cfb\u60a8\u7684\u7ba1\u7406\u5458\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u66f4\u65b0\u670d\u52a1\u5668\uff1a"
   ],
   "This package has indicated that it needs a corresponding package for the kernel.": [
       "\u8fd9\u4e2a\u5305\u8868\u793a\u5b83\u9700\u8981\u4e00\u4e2a\u5bf9\u5e94\u7684\u5185\u6838\u5305\u3002"
   ],
   "This package has indicated that it needs a corresponding server\nextension. Please contact your Administrator to update the server with\none of the following commands:": [
       "\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u8868\u793a\u5b83\u9700\u8981\u4e00\u4e2a\u76f8\u5e94\u7684\u670d\u52a1\u5668\n\u6269\u5c55\u3002 \u8bf7\u8054\u7cfb\u60a8\u7684\u7ba1\u7406\u5458\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u66f4\u65b0\u670d\u52a1\u5668\uff1a"
   ],
   "To use JupyterLab again, you will need to relaunch it.": [
       "\u82e5\u8981\u518d\u6b21\u4f7f\u7528JupyterLab \uff0c\u60a8\u9700\u8981\u91cd\u65b0\u542f\u52a8\u5b83\u3002"
   ],
   "Toggle All Line Numbers": [
       "\u5207\u6362\u6240\u6709\u884c\u53f7"
   ],
   "Toggle Auto-Numbering": [
       "\u5207\u6362\u81ea\u52a8\u7f16\u53f7"
   ],
   "Toggle Code Cells": [
       "\u5207\u6362\u4ee3\u7801\u5355\u5143\u683c"
   ],
   "Toggle Last Modified Column": [
       "\u5207\u6362\u663e\u793a\u6700\u8fd1\u4fee\u6539\u5217"
   ],
   "Toggle Markdown Text Cells": [
       "\u5207\u6362Markdown \u6587\u672c\u5355\u5143\u683c"
   ],
   "Treat option as meta key on macOS": [
       "\u5728 macOS \u4e0a\u5c06Option\u952e\u89c6\u4f5cMeta\u952e"
   ],
   "Trust HTML": [
       "\u4fe1\u4efb\u7684HTML"
   ],
   "Trust HTML File": [
       "\u4fe1\u4efb HTML \u6587\u4ef6"
   ],
   "Trust Notebook": [
       "\u4fe1\u4efb\u7b14\u8bb0\u672c"
   ],
   "Trust this notebook?": [
       "\u4fe1\u4efb\u6b64Notebook\uff1f"
   ],
   "Undo": [
       "\u64a4\u6d88"
   ],
   "Undo Cell Operation": [
       "\u64a4\u9500\u5355\u5143\u683c\u64cd\u4f5c"
   ],
   "Uninstall": [
       "\u5378\u8f7d"
   ],
   "Update": [
       "\u66f4\u65b0"
   ],
   "Updating extensions list": [
       "\u6b63\u5728\u66f4\u65b0\u6269\u5c55\u5217\u8868"
   ],
   "Upload": [
       "\u4e0a\u4f20"
   ],
   "Upload Files": [
       "\u4e0a\u4f20\u6587\u4ef6"
   ],
   "Uploading\u2026": [
       "\u6b63\u5728\u4e0a\u4f20\u2026"
   ],
   "Use Terminal Theme: %1": [
       "\u4f7f\u7528\u7ec8\u7aef\u4e3b\u9898: %1"
   ],
   "Use Theme: %1": [
       "\u4f7f\u7528\u4e3b\u9898: %1"
   ],
   "User Preferences": [
       "\u7528\u6237\u504f\u597d\u8bbe\u7f6e"
   ],
   "Variable filter": [
       "\u53d8\u91cf\u7b5b\u9009\u5668"
   ],
   "Variables": [
       "\u53d8\u91cf"
   ],
   "Version %1": [
       "\u7248\u672c %1"
   ],
  View: ["\u67e5\u770b"],
   "Warning": [
       "\u8b66\u544a"
   ],
   "Whether the HTML file is trusted.\nTrusting the file allows scripts to run in it,\nwhich may result in security risks.\nOnly enable for files you trust.": [
       "HTML\u6587\u4ef6\u662f\u5426\u53ef\u4fe1\u3002\n\u4fe1\u4efb\u6b64\u6587\u4ef6\u5c06\u5141\u8bb8\u5176\u4e2d\u7684\u811a\u672c\u8fd0\u884c\uff0c\n\u8fd9\u53ef\u80fd\u5bfc\u81f4\u5b89\u5168\u98ce\u9669\u3002\n\u8bf7\u4ec5\u5bf9\u60a8\u4fe1\u4efb\u7684\u6587\u4ef6\u542f\u7528\u3002"
   ],
   "Word Wrap": [
       "\u6362\u884c"
   ],
   "Workspace loader": [
       "\u5de5\u4f5c\u533a\u52a0\u8f7d\u5668"
   ],
   "Wrap Words": [
       "\u6362\u884c"
   ],
   "YAML File": [
       "YAML \u6587\u4ef6"
   ],
   "You have shut down the Jupyter server. You can now close this tab.": [
       "\u60a8\u5df2\u5173\u95edJupyter\u670d\u52a1\u8fdb\u7a0b\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u5173\u95ed\u6b64\u9009\u9879\u5361\u3002"
   ],
   "You have unsaved changes.": [
       "\u60a8\u6709\u5c1a\u672a\u4fdd\u5b58\u7684\u66f4\u6539\u3002"
   ],
   "You should make sure that the indicated packages are installed before\ntrying to use the extension. Do you want to continue with the extension\ninstallation?": [
       "\u5728\u4f7f\u7528\u6b64\u6269\u5c55\u4e4b\u524d\uff0c\u60a8\u5e94\u5f53\u786e\u8ba4\u6240\u63d0\u5230\u7684\u5305\u5df2\u7ecf\u88ab\u5b89\u88c5\u3002\u60a8\u8981\u7ee7\u7eed\u5b89\u88c5\u6b64\u6269\u5c55\u5417\uff1f"
   ],
   "You will lose any unsaved changes.": [
       "\u60a8\u5c06\u4e22\u5931\u4efb\u4f55\u672a\u4fdd\u5b58\u7684\u66f4\u6539\u3002"
   ],
   "Your changes were not saved.": [
       "\u60a8\u7684\u66f4\u6539\u6ca1\u6709\u4fdd\u5b58\u3002"
   ],
   "Your server at %1 is not running.\nWould you like to restart it?": [
       "\u60a8\u5728 %1 \u7684\u670d\u52a1\u5668\u672a\u8fd0\u884c\u3002\n\u60a8\u60f3\u91cd\u65b0\u542f\u52a8\u5417\uff1f"
   ],
   "Zoom In": [
       "\u653e\u5927"
   ],
   "Zoom Out": [
       "\u7f29\u5c0f"
   ],
  //  "abcdef": [
  //      "abcdef"
  //  ],
  //  "base16-dark": [
  //      "base16-dark"
  //  ],
  //  "base16-light": [
  //      "base16-light"
  //  ],
  //  "codemirror": [
  //      "codemirror"
  //  ],
  //  "default": [
  //      "default"
  //  ],
  //  "emacs": [
  //      "emacs"
  //  ],
   "hash": [
       "\u54c8\u5e0c"
   ],
  //  "hopscotch": [
  //      "hopscotch"
  //  ],
  //  "jupyter": [
  //      "jupyter"
  //  ],
  //  "material": [
  //      "material"
  //  ],
  //  "mbo": [
  //      "mbo"
  //  ],
  //  "mdn-like": [
  //      "mdn-like"
  //  ],
   "pipe": [
       "\u7ba1\u9053"
   ],
   "schema\u0004Add accessibility elements for use with screen readers.": [
       "\u6dfb\u52a0\u7528\u4e8e\u5c4f\u5e55\u9605\u8bfb\u5668\u7684\u8f85\u52a9\u5143\u7d20\u3002"
   ],
   "schema\u0004Application ": [
       "\u5e94\u7528\u7a0b\u5e8f "
   ],
   "schema\u0004Application-level visual styling theme": [
       "\u5e94\u7528\u7a0b\u5e8f\u7ea7\u89c6\u89c9\u6837\u5f0f\u4e3b\u9898"
   ],
   "schema\u0004CSS file defining the corresponding\n.cm-s-[name] styles is loaded": [
       "\u5b9a\u4e49\u5bf9\u5e94\u7684.cm-s-[name] \u6837\u5f0f\u7684\nCSS\u6587\u4ef6\u5df2\u52a0\u8f7d"
   ],
   "schema\u0004Code Console": [
       "\u4ee3\u7801\u63a7\u5236\u53f0"
   ],
   "schema\u0004Code Console settings.": [
       "\u4ee3\u7801\u63a7\u5236\u53f0\u8bbe\u7f6e\u3002"
   ],
  //  "schema\u0004CodeMirror": [
  //      "CodeMirror"
  //  ],
   "schema\u0004Command Palette": [
       "\u547d\u4ee4\u9762\u677f"
   ],
   "schema\u0004Command palette settings.": [
       "\u547d\u4ee4\u9762\u677f\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Configures the keymap to use": [
       "\u914d\u7f6e\u5feb\u6377\u952e\u6620\u5c04"
   ],
   "schema\u0004Console Completer": [
       "\u63a7\u5236\u53f0\u8865\u5168"
   ],
   "schema\u0004Console Tooltips": [
       "\u63a7\u5236\u53f0\u5de5\u5177\u63d0\u793a"
   ],
   "schema\u0004Console completer settings.": [
       "\u63a7\u5236\u53f0\u8865\u5168\u8bbe\u7f6e"
   ],
   "schema\u0004Console tooltip settings.": [
       "\u63a7\u5236\u53f0\u5de5\u5177\u63d0\u793a\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Debugger": [
       "\u8c03\u8bd5\u5668"
   ],
   "schema\u0004Debugger settings": [
       "\u8c03\u8bd5\u5668\u8bbe\u7f6e"
   ],
   "schema\u0004Document Manager": [
       "\u6587\u6863\u7ba1\u7406\u5668"
   ],
   "schema\u0004Document Manager settings.": [
       "\u6587\u6863\u7ba1\u7406\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Document Search": [
       "\u6587\u6863\u641c\u7d22"
   ],
   "schema\u0004Document search plugin.": [
       "\u6587\u6863\u641c\u7d22\u63d2\u4ef6\u3002"
   ],
   "schema\u0004Enable pasting with Ctrl+V.  This can be disabled to use Ctrl+V in the vi editor, for instance.  This setting has no effect on macOS, where Cmd+V is available": [
       "\u542f\u7528 Ctrl+V \u7c98\u8d34\u3002\u5728 vi \u7f16\u8f91\u5668\u4e2d\u4f7f\u7528 Ctrl+V \u65f6\u53ef\u7981\u7528\u6b64\u9879\u3002 \u6b64\u8bbe\u7f6e\u5bf9 macOS\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\uff0c\u56e0\u4e3amacOS\u4e2d\u4f7f\u7528Cmd+V"
   ],
   "schema\u0004Enable/disable styling of the application scrollbars": [
       "\u542f\u7528/\u7981\u7528\u6eda\u52a8\u6761\u6837\u5f0f"
   ],
   "schema\u0004Enables extension manager (requires Node.js/npm).\nWARNING: installing untrusted extensions may be unsafe.": [
       "\u542f\u7528\u6269\u5c55\u7ba1\u7406\u5668 (\u9700\u8981 Node.js/npm).\n\u8b66\u544a: \u5b89\u88c5\u4e0d\u4fe1\u4efb\u7684\u6269\u5c55\u53ef\u80fd\u4e0d\u5b89\u5168\u3002"
   ],
   "schema\u0004Extension Manager": [
       "\u6269\u5c55\u7ba1\u7406\u5668"
   ],
   "schema\u0004Extension manager settings.": [
       "\u6269\u5c55\u7ba1\u7406\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004File Browser": [
       "\u6587\u4ef6\u6d4f\u89c8\u5668"
   ],
   "schema\u0004File Browser settings.": [
       "\u6587\u4ef6\u6d4f\u89c8\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004File Editor Completer": [
       "\u6587\u4ef6\u7f16\u8f91\u5668\u8865\u5168"
   ],
   "schema\u0004File Editor Tooltips": [
       "\u6587\u4ef6\u7f16\u8f91\u5668\u5de5\u5177\u63d0\u793a"
   ],
   "schema\u0004File editor completer settings.": [
       "\u6587\u4ef6\u7f16\u8f91\u5668\u8865\u5168\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004File editor tooltip settings.": [
       "\u6587\u4ef6\u7f16\u8f91\u5668\u5de5\u5177\u63d0\u793a\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Image Viewer": [
       "\u56fe\u50cf\u67e5\u770b\u5668"
   ],
   "schema\u0004Image viewer settings.": [
       "\u56fe\u50cf\u67e5\u770b\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Inspector": [
       "\u68c0\u67e5\u5668"
   ],
   "schema\u0004Inspector settings.": [
       "\u68c0\u67e5\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Keyboard Shortcuts": [
       "\u5feb\u6377\u952e"
   ],
   "schema\u0004Keyboard shortcut settings.": [
       "\u952e\u76d8\u5feb\u6377\u952e\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Language": [
       "\u8bed\u8a00"
   ],
   "schema\u0004Language settings.": [
       "\u8bed\u8a00\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Launcher": [
       "\u542f\u52a8\u9875"
   ],
   "schema\u0004Launcher settings.": [
       "\u542f\u52a8\u9875\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Length of save interval in seconds": [
       "\u4fdd\u5b58\u95f4\u9694\uff08\u79d2\uff09"
   ],
   "schema\u0004Log Console": [
       "\u65e5\u5fd7\u63a7\u5236\u53f0"
   ],
   "schema\u0004Log Console settings.": [
       "\u65e5\u5fd7\u63a7\u5236\u53f0\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Main JupyterLab application settings.": [
       "JupyterLab \u4e3b\u7a0b\u5e8f\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Main JupyterLab menu settings.": [
       "JupyterLab \u4e3b\u83dc\u5355\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Main Menu": [
       "\u4e3b\u83dc\u5355"
   ],
   "schema\u0004Markdown Viewer": [
       "Markdown \u67e5\u770b\u5668"
   ],
   "schema\u0004Markdown viewer settings.": [
       "Markdown\u67e5\u770b\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Maximum number of log entries to store in memory": [
       "\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u7684\u65e5\u5fd7\u6761\u76ee\u7684\u6700\u5927\u6570\u91cf"
   ],
  //  "schema\u0004Notebook": [
  //      "Notebook"
  //  ],
   "schema\u0004Notebook Completer": [
       "Notebook \u81ea\u52a8\u8865\u5168"
   ],
   "schema\u0004Notebook Tooltips": [
       "\u7b14\u8bb0\u672c\u5de5\u5177\u63d0\u793a"
   ],
   "schema\u0004Notebook completer settings.": [
       "Notebook \u81ea\u52a8\u8865\u5168\u8bbe\u7f6e"
   ],
   "schema\u0004Notebook settings.": [
       "Notebook\u8bbe\u7f6e"
   ],
   "schema\u0004Notebook tooltip settings.": [
       "Notebook\u63d0\u793a\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Option key on macOS can be used as meta key. This enables to use shortcuts such as option + f to move cursor forward one word": [
       "MacOS\u4e2dOption\u952e\u53ef\u88ab\u7528\u4f5cMeta\u952e\u3002\u8fd9\u4f7f\u5f97\u8bf8\u5982 option+f\uff08\u5c06\u5149\u6807\u5411\u524d\u79fb\u52a8\u4e00\u4e2a\u5355\u8bcd\uff09\u7684\u5feb\u6377\u952e\u53ef\u4ee5\u4f7f\u7528\u3002"
   ],
   "schema\u0004Override theme CSS variables by setting key-value pairs here": [
       "\u5728\u6b64\u8bbe\u5b9a\u952e\u503c\u5bf9\u4ee5\u8986\u76d6\u4e3b\u9898 CSS \u53d8\u91cf"
   ],
   "schema\u0004Overrides for the default viewers for file types": [
       "\u8986\u76d6\u6307\u5b9a\u6587\u4ef6\u7c7b\u578b\u7684\u9ed8\u8ba4\u67e5\u770b\u5668"
   ],
   "schema\u0004Overrides for where to show sidebar items\ne.g., {\"tab-manager\": \"right\"}": [
       "\u8986\u76d6\u4fa7\u8fb9\u680f\u9879\u76ee\u663e\u793a\u4f4d\u7f6e\n\u4f8b\u5982{\"tab-manager\": \"right\"}"
   ],
   "schema\u0004Print": [
       "\u6253\u5370"
   ],
   "schema\u0004Print settings.": [
       "\u6253\u5370\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Set the interface display language. Examples: 'es_CO', 'fr'.": [
       "\u8bbe\u7f6e\u754c\u9762\u663e\u793a\u8bed\u8a00\u3002\u4f8b\u5982: 'es_CO', 'fr'\u3002"
   ],
   "schema\u0004Setting Editor": [
       "\u5bc6\u94a5\u4e32\u7f16\u8f91\u5668"
   ],
   "schema\u0004Setting editor settings.": [
       "\u8bbe\u7f6e\u7f16\u8f91\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Should timing data be recorded in cell metadata": [
       "\u662f\u5426\u5728\u5355\u5143\u683c\u5143\u6570\u636e\u4e2d\u8bb0\u5f55\u8ba1\u65f6\u6570\u636e"
   ],
   "schema\u0004Shut down the session when closing the terminal.": [
       "\u5173\u95ed\u7ec8\u7aef\u65f6\u7ec8\u6b62\u6b64\u4f1a\u8bdd\u3002"
   ],
   "schema\u0004Sidebar": [
       "\u4fa7\u8fb9\u680f"
   ],
   "schema\u0004Sidebar layout settings.": [
       "\u4fa7\u8fb9\u680f\u5e03\u5c40\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Status Bar": [
       "\u72b6\u6001\u680f\u200b\u200b\u200b\u200b\u200b\u200b\u200b"
   ],
   "schema\u0004Status Bar settings.": [
       "\u72b6\u6001\u680f\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Terminal": [
       "\u7ec8\u7aef"
   ],
   "schema\u0004Terminal settings.": [
       "\u7ec8\u7aef\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Text Editor": [
       "\u6587\u672c\u7f16\u8f91\u5668"
   ],
   "schema\u0004Text editor settings for all CodeMirror editors.": [
       "\u6240\u6709CodeMirror \u6587\u672c\u7f16\u8f91\u5668\u7684\u5168\u5c40\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Text editor settings.": [
       "\u6587\u672c\u7f16\u8f91\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004The amount of scrollback beyond initial viewport": [
       "\u56de\u6eda\u91cf\u8d85\u8fc7\u4e86\u521d\u59cb\u89c6\u53e3"
   ],
   "schema\u0004The configuration for all code cells.": [
       "\u6240\u6709\u4ee3\u7801\u5355\u5143\u683c\u7684\u914d\u7f6e."
   ],
   "schema\u0004The configuration for all markdown cells.": [
       "\u6240\u6709Markdown\u5355\u5143\u683c\u7684\u914d\u7f6e\u3002"
   ],
   "schema\u0004The configuration for all raw cells.": [
       "\u6240\u6709\u539f\u59cb\u5355\u5143\u683c\u7684\u914d\u7f6e\u3002"
   ],
   "schema\u0004The configuration for all text editors.\nIf `fontFamily`, `fontSize` or `lineHeight` are `null`,\nvalues from current theme are used.": [
       "\u6240\u6709\u6587\u672c\u7f16\u8f91\u5668\u7684\u914d\u7f6e\u3002\n\u5982\u679c `fontFamily`, `fontSize` \u6216 `lineHight` \u4e3a `null`\uff0c\n\u5c06\u4f7f\u7528\u5f53\u524d\u4e3b\u9898\u914d\u7f6e\u3002"
   ],
   "schema\u0004The default type (markdown, code, or raw) for new cells": [
       "\u65b0\u5355\u5143\u683c\u7684\u9ed8\u8ba4\u7c7b\u578b (markdown, \u4ee3\u7801\u6216 \u539f\u59cb)"
   ],
   "schema\u0004The font family used to render markdown.\nIf `null`, value from current theme is used.": [
       "\u7528\u4e8e\u6e32\u67d3Markdown\u7684\u5b57\u4f53\u96c6\u3002\n\u5982\u679c\u503c\u4e3a `null`\uff0c\u5219\u6cbf\u7528\u5f53\u524d\u4e3b\u9898\u7684\u503c\u3002"
   ],
   "schema\u0004The font family used to render text.": [
       "\u7528\u6765\u6e32\u67d3\u6587\u672c\u7684\u5b57\u4f53\u3002"
   ],
   "schema\u0004The font size used to render text.": [
       "\u7528\u4e8e\u6e32\u67d3\u6587\u672c\u7684\u5b57\u4f53\u5927\u5c0f\u3002"
   ],
   "schema\u0004The line height used to render markdown.\nIf `null`, value from current theme is used.": [
       "\u7528\u4e8e\u6e32\u67d3 Markdown \u7684\u884c\u9ad8\u3002\n\u5982\u679c\u503c\u4e3a `null`\uff0c\u5219\u6cbf\u7528\u5f53\u524d\u4e3b\u9898\u7684\u503c\u3002"
   ],
   "schema\u0004The line height used to render text.": [
       "\u6e32\u67d3\u6587\u672c\u65f6\u6240\u4f7f\u7528\u7684\u884c\u9ad8\u3002"
   ],
   "schema\u0004The list of keyboard shortcuts.": [
       "\u952e\u76d8\u5feb\u6377\u952e\u5217\u8868\u3002"
   ],
   "schema\u0004The render timeout in milliseconds.": [
       "\u6e32\u67d3\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09\u3002"
   ],
   "schema\u0004The size in pixel of the font used to render markdown.\nIf `null`, value from current theme is used.": [
       "\u7528\u6765\u6e32\u67d3Markdown\u7684\u5b57\u4f53\u7684\u50cf\u7d20\u5927\u5c0f\u3002\n\u5982\u679c\u503c\u4e3a `null`\uff0c\u5219\u6cbf\u7528\u5f53\u524d\u4e3b\u9898\u7684\u503c\u3002"
   ],
   "schema\u0004The text line width expressed in CSS ch units.\nIf `null`, lines fit the viewport width.": [
       "\u4ee5CSS\u4e2d\u7684 ch \u5355\u4f4d\u8868\u793a\u7684\u6587\u672c\u884c\u5bbd\u3002\n\u5982\u679c\u4e3a`null`\uff0c \u5219\u7b26\u5408\u89c6\u53e3\u5bbd\u5ea6\u3002"
   ],
   "schema\u0004The theme for the terminal.": [
       "\u7ec8\u7aef\u4e3b\u9898\u3002"
   ],
   "schema\u0004Theme": [
       "\u4e3b\u9898"
   ],
   "schema\u0004Theme manager settings.": [
       "\u4e3b\u9898\u7ba1\u7406\u5668\u8bbe\u7f6e\u3002"
   ],
   "schema\u0004Value is boolean": [
       "\u503c\u4e3a\u5e03\u5c14\u503c"
   ],
   "schema\u0004Value is boolean or string, e.g. 'pointer'": [
       "\u503c\u662f\u5e03\u5c14\u503c\u6216\u5b57\u7b26\u4e32\uff08\u4f8b\u5982 'pointer'\uff09"
   ],
   "schema\u0004Value is boolean, or { nonEmpty: boolean }": [
       "\u503c\u662f\u5e03\u5c14\u503c\u6216 { nonEmpty: boolean }"
   ],
   "schema\u0004Variables to filter out in the tree and table viewers": [
       "\u5728\u6811\u548c\u8868\u683c\u67e5\u770b\u5668\u4e2d\u7b5b\u9009\u53d8\u91cf"
   ],
   "schema\u0004When enabled, which is the default, doing copy or cut when there is no selection will copy or cut the whole lines that have cursors on them.": [
       "\u5f53\u542f\u7528\u65f6\uff08\u6b64\u4e3a\u9ed8\u8ba4\u503c\uff09\uff0c \u5728\u6ca1\u6709\u9009\u53d6\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\u590d\u5236\u6216\u526a\u5207\u64cd\u4f5c\u5c06\u4f1a\u590d\u5236\u6216\u526a\u5207\u5149\u6807\u6240\u5728\u7684\u6574\u884c\u3002"
   ],
   "schema\u0004Whether the console defaults to showing all\nkernel activity or just kernel activity originating from itself.": [
       "\u63a7\u5236\u53f0\u662f\u9ed8\u8ba4\u663e\u793a\u6240\u6709\u5185\u6838\u6d3b\u52a8\uff0c\u8fd8\u662f\u4ec5\u663e\u793a\u6e90\u81ea\u5176\u81ea\u8eab\u7684\u5185\u6838\u6d3b\u52a8\u3002"
   ],
   "schema\u0004Whether the console interaction mimics the notebook\nor terminal keyboard shortcuts.": [
       "\u63a7\u5236\u53f0\u4ea4\u4e92\u662f\u5426\u6a21\u62dfNoetbook\u6216\u7ec8\u7aef\u952e\u76d8\u5feb\u6377\u952e\u3002"
   ],
   "schema\u0004Whether the user understand that extensions managed through this interface run arbitrary code that may be dangerous": [
       "\u7528\u6237\u662f\u5426\u7406\u89e3\u901a\u8fc7\u6b64\u63a5\u53e3\u7ba1\u7406\u7684\u6269\u5c55\u4f1a\u8fd0\u884c\u4efb\u610f\u4ee3\u7801\uff08\u8fd9\u4e9b\u4ee3\u7801\u53ef\u80fd\u5177\u6709\u5371\u9669\u6027\uff09"
   ],
   "schema\u0004Whether to apply fuzzy algorithm while filtering on file names": [
       "\u8fc7\u6ee4\u6587\u4ef6\u540d\u65f6\u662f\u5426\u4f7f\u7528\u6a21\u7cca\u7b97\u6cd5"
   ],
   "schema\u0004Whether to automatically navigate to a document's current directory": [
       "\u662f\u5426\u81ea\u52a8\u5bfc\u822a\u5230\u6587\u6863\u7684\u5f53\u524d\u76ee\u5f55"
   ],
   "schema\u0004Whether to autosave documents": [
       "\u662f\u5426\u81ea\u52a8\u4fdd\u5b58\u6587\u6863"
   ],
   "schema\u0004Whether to be able to scroll so the last cell is at the top of the panel": [
       "\u662f\u5426\u80fd\u591f\u6eda\u52a8\u4ee5\u4f7f\u6700\u540e\u4e00\u4e2a\u5355\u5143\u683c\u4f4d\u4e8e\u9762\u677f\u7684\u9876\u7aef"
   ],
   "schema\u0004Whether to flash on new log message or not": [
       "\u6709\u65b0\u65e5\u5fd7\u6d88\u606f\u65f6\u662f\u5426\u95ea\u70c1\uff1f"
   ],
   "schema\u0004Whether to hide YAML front matter.\nThe YAML front matter must be placed at the top of the document,\nstarted by a line of three dashes (---) and ended by a line of\nthree dashes (---) or three points (\u2026).": [
       "\u662f\u5426\u9690\u85cf YAML \u5934\u90e8\u3002\n\u5fc5\u987b\u5c06YAML \u5934\u90e8\u653e\u7f6e\u5728\u6587\u6863\u7684\u9876\u90e8\uff0c\n\u8d77\u59cb\u4e8e\u4e09\u4e2a\u7834\u6298\u7ebf(---) \u6784\u6210\u7684\u884c\uff0c\u7ed3\u675f\u4e8e\n\u4e09\u4e2a\u7834\u6298\u7ebf(---) \u6216\u4e09\u4e2a\u70b9(\u2026) \u6784\u6210\u7684\u884c"
   ],
   "schema\u0004Whether to scroll past the end of text document": [
       "\u662f\u5426\u6eda\u52a8\u8d85\u8fc7\u6587\u672c\u6587\u6863\u7684\u672b\u7aef"
   ],
   "schema\u0004Whether to show status bar or not": [
       "\u662f\u5426\u663e\u793a\u72b6\u6001\u680f"
   ],
   "schema\u0004Whether to shut down or not the kernel when closing a notebook.": [
       "\u5173\u95ed\u7b14\u8bb0\u672c\u65f6\u662f\u5426\u7ec8\u6b62\u5185\u6838\u3002"
   ],
  //  "seti": [
  //      "seti"
  //  ],
   "showErrorMessage": [
       "\u663e\u793a\u9519\u8bef\u6d88\u606f"
   ],
    "showErrorMessage\u0004\"%1\" is not a valid name for a file. Names must have nonzero length, and cannot include \"/\", \"\\\", or \":\"": [
        "\"%1\" \u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684\u6587\u4ef6\u540d\u3002\u6587\u4ef6\u540d\u5fc5\u987b\u5177\u6709\u975e\u96f6\u957f\u5ea6\uff0c\u4e14\u4e0d\u5305\u542b \"/\"\u3001\"\\\" \u6216 \":\""
    ],
   "showErrorMessage\u0004Delete Failed": [
       "\u5220\u9664\u5931\u8d25"
   ],
   "showErrorMessage\u0004Duplicate file": [
       "\u91cd\u590d\u7684\u6587\u4ef6"
   ],
   "showErrorMessage\u0004Error while copying/moving files": [
       "\u590d\u5236\u6216\u79fb\u52a8\u6587\u4ef6\u65f6\u51fa\u9519"
   ],
   "showErrorMessage\u0004Open directory": [
       "\u6253\u5f00\u76ee\u5f55"
   ],
   "showErrorMessage\u0004Paste Error": [
       "\u7c98\u8d34\u51fa\u9519"
   ],
   "showErrorMessage\u0004Rename Error": [
       "\u91cd\u547d\u540d\u9519\u8bef"
   ],
   "showErrorMessage\u0004Shut down kernel": [
       "\u7ec8\u6b62\u5185\u6838"
   ],
   "showErrorMessage\u0004Upload Error": [
       "\u4e0a\u4f20\u9519\u8bef"
   ],
  //  "solarized dark": [
  //      "solarized dark"
  //  ],
  //  "solarized light": [
  //      "solarized light"
  //  ],
  //  "sublime": [
  //      "sublime"
  //  ],
   "tab": [
       "\u6807\u7b7e\u9875"
   ],
  //  "the-matrix": [
  //      "the-matrix"
  //  ],
  //  "vim": [
  //      "vim"
  //  ],
  //  "xq-light": [
  //      "xq-light"
  //  ],
  //  "zenburn": [
  //      "zenburn"
  //  ],
   "\u00a9 2015-2020 Project Jupyter Contributors": [
       "\u00a9 2015-2020 Jupyter \u9879\u76ee\u8d21\u732e\u8005"
   ]
};

 allData = Object.keys(jsonData).map(item=>([item,jsonData[item][0]]))

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
let MutationObserverConfig = {
  childList: true,
  subtree: true,
  attributeFilter: ["data-label"],
  characterData: true,
};

let observer = new MutationObserver(function (mutations) {
  let treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ALL,
    {
      acceptNode: function (node) {
        if (node.nodeType === 3 || node.hasAttribute("data-label")) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      },
    },
    false
  );
  let dataMap = new Map();
  for (i in jsonData) {
    if (i && !dataMap.has(i)) {
      dataMap.set(i, jsonData[i][0]);
    }
  }
   allData.forEach(([key, val]) => {
     if (key && !dataMap.has(key)) {
       dataMap.set(key, val);
     }
   });
  let currentNode = treeWalker.currentNode;
  while (currentNode) {
    if (currentNode.nodeType === 3) {
      let key1 = currentNode.textContent;
      if (dataMap.has(key1)) currentNode.textContent = dataMap.get(key1);
    } else {
      let key2 = currentNode.getAttribute("data-label");
      if (dataMap.has(key2))
        currentNode.setAttribute("data-label", dataMap.get(key2));
    }

    currentNode = treeWalker.nextNode();
  }
});

observer.observe(document.body, MutationObserverConfig);

import React from 'react';
import Markdown from 'react-markdownit';
import Highlight from '@episodeyang/react-highlight.js';
import PropsTable from 'react-component-props-table';
import HappySandwichMakerExample from './link-graph-simple.example';
import HappySandwichMakerAst from '!!react-docgen!../link-graph';
import HappySandwichMakerSource from '!!raw!./link-graph-simple.example.js';
import CircleNodeAst from '!!react-docgen!../blocks/circle-node';
import StraightConnectorAst
  from '!!react-docgen!../connectors/straight-connector';
import SankeyDiagramSimpleExample from './sankey-simple.example';
import SankeyDiagramSimpleAst from '!!react-docgen!../sankey';
import SankeyDiagramSimpleExampleSource from '!!raw!./sankey-simple.example.js';
import SankeyDiagramFullExample from './sankey-full.example';
import SankeyDiagramFullExampleSource from '!!raw!./sankey-full.example.js';


export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # React Vis Graph Component: Link Graph and Sankey Diagram

      [![github](https://img.shields.io/github/downloads/episodeyang/` +
      `react-vis-graph-components/total.svg?style=flat-square&maxAge=2592000)]()

      ## Link Graph

      This component allows you to draw a linked node graph easily.
      The graph component takes in the children (links and nodes) and
      automatically calculates the end points for the connections and
      adds padding.

      `}
      <HappySandwichMakerExample/>
      {`
      ### Usage Example

      The source code below of the example above is loaded using the
      webpack raw loader.`}
      <Highlight>{HappySandwichMakerSource}</Highlight>
      {`

      ## Sankey Diagram

      `}
      {`
      ### Simple Usage example

      here is a simple example of the Sankey Diagram.
      `}
      <SankeyDiagramSimpleExample/>
      <Highlight>{SankeyDiagramSimpleExampleSource}</Highlight>
      {`
      ### A More Sophisticated Sankey Example

      `}
      <SankeyDiagramFullExample/>
      <Highlight>{SankeyDiagramFullExampleSource}</Highlight>
      {`

      ## Develop

      1. First make your changes, then git commit. Use \`serve-docs\`
       to view live update at [http://localhost:5000](http://localhost:5000).
      2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      3. Then remember to push to master.

      ## Link Graph Component API
      ### Props
      The component takes the following props:
      `}
      <PropsTable propMetaData={HappySandwichMakerAst.props}/>
      {`
      ### Children Component API
      The \`LinkGraph\` component takes three types of children:
      - SVG \`\<defs\>\` elements that contains reusable svg nodes.
      - Node graph children type, and
      - Link graph children type.

      The Node children and the link children's type are implemented by a static
      property on the component \`graphNodeType\`. To implement your own, you
      can look at the source here: [CircleNode soruce code](https://github.` +
      `com/episodeyang/react-vis-graph-components/blob/master/src/blocks/ci` +
      `rcle-node.js#L30)

      #### CircleNode API
      The \`CircleNode\` is a light wrapper on top of \`\<circle\>\`.
      `}
      <PropsTable propMetaData={CircleNodeAst.props}/>
      {`
      #### StraightConnector API

      The \`StraightConnector\` when used inside \`LinkGraph\`, can look up
      peers with the correct name and automatically calculate the coordinates
      of the start and the end of the connector. This logic is inside
      \`LinkGraph\`.

      Typically only \`from\` and \`to\` are used whereas \`x/y_i\` are calculated
      automatically.
      `}
      <PropsTable propMetaData={StraightConnectorAst.props}/>
      {`
      ## Sankey Diagram API

      The Sankey Diagram has a similar API as the LinkGraph. It takes two more
      props to specify the horizontal and vertical spacing for the layout.


      `}
      <PropsTable propMetaData={SankeyDiagramSimpleAst.props}/>
    </Markdown>
  )
}
// ### Props
// {`This table below is generated automatically`}
// <div className='table-container horizontal-scroll flex-column center'>
//   <PropsTable propMetaData={HappySandwichMakerAST.props}/>
// </div>

/**
 * Created on 6/24/16.
 */
import React from 'react';
import Markdown from 'react-markdownit';
import Highlight from '@episodeyang/react-highlight.js';
import HappySandwichMakerExample from './link-graph-simple.example';
import HappySandwichMakerSource from '!!raw!./link-graph-simple.example.js';
import SankeyDiagramExample from './sankey-simple.example';
import SankeyDiagramSource from '!!raw!./sankey-simple.example.js';

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # Linked Node Graph Component and Sankey Diagram

      ## Linked Node Graph

      [![github](https://img.shields.io/github/downloads/episodeyang/` +
      `react-vis-graph-components/total.svg?style=flat-square&maxAge=2592000)]()

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
      <SankeyDiagramExample/>
      {`
      ### Usage example

      The source code below of the example above is loaded using the
      webpack raw loader.`}
      <Highlight>{SankeyDiagramSource}</Highlight>
      {`

      ## Develop

      1. First make your changes, then git commit. Use \`serve-docs\`
       to view live update at [http://localhost:5000](http://localhost:5000).
      2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      3. Then remember to push to master.

      `}
    </Markdown>
  )
}
// ### Props
// {`This table below is generated automatically`}
// <div className='table-container horizontal-scroll flex-column center'>
//   <PropsTable propMetaData={HappySandwichMakerAST.props}/>
// </div>

/** Created by ge on 8/22/16. */

export default function splitHeadsFromRest(nodes = [], links = []) {
  const heads = nodes.filter(
    ({props: {name}}) => {
      return !links.filter(({props: {to}}) => (to === name)).length;
    }
  );

  const linksFrom = links.filter(
    ({props: {from}}) => {
      return heads.filter(({props: {name}}) => (from === name)).length;
    }
  );

  const restNodes = nodes.filter(node => !(heads.includes(node)));
  const restLinks = links.filter(link => !(linksFrom.includes(link)));

  return {
    heads,
    linksFrom,
    restNodes,
    restLinks
  };
}

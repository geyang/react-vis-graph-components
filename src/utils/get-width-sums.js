/** Created by ge on 8/24/16. */
export default function getWidthSums(nodeHash, linkWidths, from, to, linkKey) {
  return {
    fromSum: nodeHash[from].from.slice(
      0,
      nodeHash[from].from.indexOf(linkKey)
    ).reduce(
      (sum, key) => (sum + linkWidths[key]),
      0
    ),
    toSum: nodeHash[to].to.slice(
      0,
      nodeHash[to].to.indexOf(linkKey)
    ).reduce(
      (sum, key) => (sum + linkWidths[key]),
      0
    )
  };
}

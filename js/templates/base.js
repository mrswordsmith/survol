/* Hover classes bound themselves to a node
 * The baseHover is designed for non-recognized link (still need to identify legit links without applying the class to buttons etc..)
 */
class BaseHover {
    constructor(node, CURRENT_TAB) {
        this.linkType = 'unknown';
        this.CURRENT_TAB = CURRENT_TAB;
    }

    /* bindToContainer
     * Parameters :
     * node - {HTMLNodeElement} - An anchor link element
     * domain - {String} - The domain of the current webpage
     * container - {HTMLNodeElement} - The survol container
     * 
     * This function is called to get the data from the link we
     * want to preview and then attach it to the container
     * Note: data is always inserted into textNodes to avoid
     * malicious script injections.
     */
    bindToContainer(node, domain, container) {
        if (node.href) {
            if (node.href.endsWith('png') || node.href.endsWith('jpg')) {
                const element = document.createElement('img');
                element.src = node.href;
                container.appendChild(element);
            } else if (node.href.endsWith('ogg') || node.href.endsWith('mp3')) {
                const element = document.createElement('audio');
                element.src = node.href;
                container.appendChild(element);
                element.play();
            } 
        }
    }
}
/**
 * Enumeration for navigation policy options which control how to update the stack of navigation item when an item is opened or closed.
 * @public 
 * @enum 
 * @properties={typeid:35,uuid:"58A3FF05-89EB-403F-A003-D984BB984064",variableType:-4}
 */
var NAVIGATION_POLICY = {
    /**
     * TODO should be renamed STACK ?
     * 
     * Opened NavigationItems are handled as a linear stack.
     * You can compare the behavior of the linear navigation to the behavior of a breadcrumb.
     * Whenever you open an item which is already in the stack, it will remove all the items in the stack in front of it.
     * Whenever an item is closed {@link close(itemOrId)} all the items on top of it are removed.
     * This is the Default policy
     */
    LINEAR: 'linear',

    /**
     * TODO should be called PILE ?
     * 
     * Opened NavigationItems are handled as a pile.
     * You can compare the behavior of the concurrent navigation to the behavior of a tab panel.
     * You can freely navigate and remove the items in the pile of Navigation Items without affecting other Navigation items (which you may have opened previously or subsequently)
     * Whenever you open an item which is already in the pile, it will move the item on top of the pile and select it as currentItem.
     * Whenever an item is closed {@link close(itemOrId)} it removes the single item regardless of it's position in the pile.
     */
    CONCURRENT: 'concurrent'
};

/**
 * @public 
 * @enum 
 * @properties={typeid:35,uuid:"564021D4-081B-4FE5-8FE4-FF2585815D29",variableType:-4}
 */
var NAVIGATION_EVENT = {
	BEFORE_CLOSE: 'before-close',
	AFTER_OPEN: 'after-open'
};

/**
 * Maximium number of items in the navigation history (defaults to 100)
 * @type {Number}
 * @private 
 *
 * @properties={typeid:35,uuid:"DDE2AD7F-B03C-49C5-9881-6EC8DEFC268D",variableType:4}
 */
var MAX_HISTORY_LENGTH = 100;

/**
 * @private 
 * @type {Array<Function>}
 * @properties={typeid:35,uuid:"81D3643A-CACA-4109-9308-F219E9F2CDC0",variableType:-4}
 */
var listeners = [];

/**
 * @private 
 * @type {Array<NavigationItem>}
 * @properties={typeid:35,uuid:"C8BA50D6-E824-477C-A20E-601C2889D0B8",variableType:-4}
 */
var items = [];

/**
 * TODO it can be used as a proper history stack. 
 * Open items are pushed into the history stack.
 * It could have 2 types of policies LINEAR, CONCURRENT. A linear policy could behave like a stack. 
 * While concurrent policy would always add an open item on top of it (even if already exists in the stack, like browser history);
 * 
 * @private 
 * @type {Array<NavigationItem>}
 * @properties={typeid:35,uuid:"96297058-1B48-46D4-BFBF-103287F9F507",variableType:-4}
 */
var itemsHistory = [];

/**
 * When navigating through the history, this index is used
 * Whenever a new navigation item is added while walking through history,
 * this history stack is cut off (items after this index will be removed) 
 * and the index is reset
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"543C177C-5C58-4160-B8A5-61359A058CE2",variableType:4}
 */
var itemsHistoryIndex = -1;

/**
 * Set the navigation policies when the 
 * @type {NavigationPolicies}
 * @private
 * @properties={typeid:35,uuid:"87EF8EBF-9544-456E-B48E-A12AC6E6900D",variableType:-4}
 */
var navigationPolicies = createNavigationPolicies();

/**
 * Internal constructor. To create a new instance of the NavigationPolicies class use the method {@link createNavigationPolicies}.
 * @classdesc This class encapsulates the various supported navigation policies.
 * @protected 
 * @constructor
 * @properties={typeid:24,uuid:"DE6AB0B7-8695-4B46-9B2E-DE5D8BC8FFEB"}
 */
function NavigationPolicies() {

    /**
     * @protected
     * @type {String}
     * @ignore
     */
    this.navigationPolicy = NAVIGATION_POLICY.LINEAR;
    
    /**
     * Sets the navigation policy
     * @public
     * @param {String} policy options which control how to update the stack of navigation item when an item is opened or closed. Must be one of the {@link NAVIGATION_POLICY} enumeration options.
     * @return {NavigationPolicies} This NavigationPolicies instance for call-chaining support.
     */
    this.setNavigationPolicy = function(policy) {
        this.navigationPolicy = policy;
        return this;
    }

    /**
     * Gets the current openExistinItemPolicy
     * @public
     * @return {String} The current open existing item policy as one of the {@link OPEN_EXISTING_ITEM_POLICY} enumeration options.
     */
    this.getNavigationPolicy = function() {
        return this.navigationPolicy;
    }
}

/**
 * Factory method for creating {@link NavigationPolicies} objects.
 * @public 
 * @return {NavigationPolicies} The created {@link NavigationPolicies} object.
 * 
 * @example <pre>// create new navigation policies
	var navPolicies = scopes.svyNavigation.createNavigationPolicies();
	navPolicies.setOpenExistingItemPolicy(scopes.svyNavigation.OPEN_EXISTING_ITEM_POLICY.MOVE_TO_TOP_OF_STACK);
	
	// set navigation policies
	scopes.svyNavigation.setNavigationPolicies(navPolicies);</pre>
 * 
 * @properties={typeid:24,uuid:"70ACC9D7-4FAD-419F-B89D-F0188E0A9724"}
 */
function createNavigationPolicies() {
    return new NavigationPolicies();
}

/**
 * Sets the navigation policies; is suggested to call this method at the onOpenSolution event to properly initialize the navigation
 * @public 
 * @param {NavigationPolicies} policies
 * @example <pre>// create new navigation policies
	var navPolicies = scopes.svyNavigation.createNavigationPolicies();
	navPolicies.setOpenExistingItemPolicy(scopes.svyNavigation.OPEN_EXISTING_ITEM_POLICY.MOVE_TO_TOP_OF_STACK);
	
	// set navigation policies
	scopes.svyNavigation.setNavigationPolicies(navPolicies);</pre>
 * 
 * @properties={typeid:24,uuid:"12D38DE2-1348-409F-9195-91FB875DF831"}
 */
function setNavigationPolicies(policies) {
	navigationPolicies = policies;
}

/**
 * Opens the navigation item. 
 * If the item already exists in the stack, then all items after the specified item are closed
 * beforeClose event will be fired allowing a chance to rect or cancel
 * afterOpen will fire allowing UIs to update
 * 
 * @public 
 * @param {NavigationItem|String} itemOrID
 * @return {Boolean}
 * @properties={typeid:24,uuid:"1210FE48-6A94-40DD-9BF4-B843044EA1ED"}
 */
function open(itemOrID) {
	return openHandler(itemOrID);
}

/**
 * Internal open handler accepts skipHistoryEntry parameter
 * 
 * @private  
 * @param {NavigationItem|String} itemOrID
 * @param {Boolean} [skipHistoryEntry] when true, no entry will be added to the history stack
 * @return {Boolean}
 * @properties={typeid:24,uuid:"808C5DC6-56D3-4429-B3B1-05D7A4C485C1"}
 */
function openHandler(itemOrID, skipHistoryEntry) {

	// look for existing item in nav stack
	var id = itemOrID instanceof String ? itemOrID : itemOrID.getID();
	var navItem = itemOrID instanceof NavigationItem ? itemOrID : null;
	var index = items.length;
	for (var i = 0; i < items.length; i++) {
		var item = items[i];

		// found item
		// TODO Copy /  update item if it already existed, allow for mutation ?
		if (item.getID() == id) {
			index = i;
			navItem = item;
			break;
		}
	}

	// Item ID not found in stack
	if (!navItem) {
		// TODO log warning
		return false;
	}

	// before event
	if (items.length > 0 && !beforeClose()) {
		// TODO log warning
		return false;
	}

	if (navigationPolicies.getNavigationPolicy() === NAVIGATION_POLICY.CONCURRENT) {
		// remove this item from its current position and add it again at the top of the stack
		// TODO i am moving the navigation item on top of the stack..
		// would it make more sense to keep the order ot items in stack as is and track instead the index of the selected item ?
		items.splice(index, 1);
	} else {
		// close all the items in front of the re-opened item
		for (i = items.length - 1; i > index; i--) {
			// TODO what happens if some of the beforeClose has already returned true ?
			// maybe we need an AFTER_CLOSE event which can be used to finalize the closed state:
			// e.g. AFTER_CLOSE you are now sure that the item have been closed, you can remove the item from the tabpanel UI.
			if (!beforeClose(items[i])) {
				return false;
			}
		}

		// trim stack
		items = items.slice(0, index);
	}

	// add item
	items.push(navItem);
	if (skipHistoryEntry !== true && itemsHistoryIndex !== -1) {
		//we have been navigating through history, but now a new item is opened
		//the new item is added at the current history index and the history is cut off at that point
		itemsHistory.splice(itemsHistoryIndex + 1, itemsHistory.length - itemsHistoryIndex, navItem);
		itemsHistoryIndex = -1;
	} else if (skipHistoryEntry !== true) {
		//we are not navigating through history, item is added to history
		itemsHistory.push(navItem);
		if (MAX_HISTORY_LENGTH !== -1 && itemsHistory.length > MAX_HISTORY_LENGTH) {
			itemsHistory.shift();
		}
	}

	// after event
	afterOpen();

	return true;
}

/**
 * @private 
 * @param {NavigationItem|String} itemOrID
 * @return {Number}
 * @properties={typeid:24,uuid:"931CD229-352B-4840-A469-793A68A0EF64"}
 */
function indexOf(itemOrID){
	var id = itemOrID instanceof String ? itemOrID : itemOrID.getID();
	for (var i = 0; i < items.length; i++){
		var item = items[i];
		if(item.getID() == id){
			return i;
		}
	}
	return -1;
}

/**
 * Closes current navigation item and opens the previous item
 * @param {NavigationItem|String} [itemOrID]
 * 
 * @public 
 * @return {Boolean}
 * @properties={typeid:24,uuid:"2F17EE08-7E2D-4559-9C53-53D50612A8FB"}
 */
function close(itemOrID) {

	var item; 
	if (itemOrID) {	
		
		if (itemOrID instanceof String) {
			/** @type {String} */
			var id = itemOrID;
			item = getNavigationItem(id)
		} else {
			item = itemOrID;
		}
		
		// find the position of the item
		var index = indexOf(itemOrID);
		
		// validate index position
		if (index >= 0) {
			// TODO shall i allow to close the last item when navigation policy is concurrent or create a new policy !?
			if (index < 1) {
				// there is no previous item, cannot close
				return false;
			}
		} else {	// cannot find the item to close
			return false;
		}
		
		// before event
		if(!beforeClose(item)){
			// TODO log warning
			return false;
		}
		
		var currentItem = getCurrentItem();
		
		// TODO does it make sense to have a remove policy which differs from OPEN_EXISTING_ITEM_POLICY !?!?
		if (navigationPolicies.getNavigationPolicy() === NAVIGATION_POLICY.CONCURRENT) {
			// remove only the navigation item
			items.splice(index, 1);
		} else {	// default navigation policy is CLOSE_ITEM_POLICY.RESET_STACK
			// trim stack
			items = items.slice(0, index - 1);
		}
		
		// open the current item if the current item has been changed
		var newCurrentItem = getCurrentItem();
		if (newCurrentItem && newCurrentItem.getID() != currentItem.getID()) {
			// open the currentItem since current item has changed
			afterOpen();
		}
		
		return true;
	} else { // close the last item
	
		// get previous item
		item = items[items.length - 2];
		
		// No previous item
		if (!item) {
			// TODO log warning
			return false;
		}

		// for linear navigation open item will close all the items in front of it
		return open(item);
	}
}

/**
 * @public 
 * @param {NavigationItem} navigationItem
 * @return {Boolean}
 * @properties={typeid:24,uuid:"2E121717-BF41-45FB-A7A0-86C384EC2359"}
 */
function reset(navigationItem){
	
	// before event
	if(!beforeClose()){
		// TODO log warning
		return false;
	}
	
	// reset to item
	items = [navigationItem];
	
	// after event
	afterOpen();
	
	return true;
}

/**
 * @public 
 * @return {Array<NavigationItem>}
 * @properties={typeid:24,uuid:"37235352-825E-4881-8E35-78A52A467961"}
 */
function getNavigationItems(){
	var a = [];
	for(var i in items){
		a.push(items[i]);
	}
	return a;
}

/**
 * Returns the item with the given ID from the items stack when found and null otherwise
 * @public 
 * @param {String} id
 * @return {NavigationItem}
 * @properties={typeid:24,uuid:"73F69D5E-6708-4937-AE3D-ACBC5C620A89"}
 */
function getNavigationItem(id){
	// TODO consider making a map for performance improvement
	for(var i in items){
		var item = items[i];
		if (item.getID() == id){
			return item;
		}
	}
	return null;
}

/**
 * Returns the item with the given ID from the history stack when found and null otherwise
 * @public 
 * @param {String} id
 * @return {NavigationItem}
 * @properties={typeid:24,uuid:"63DBA653-9A7C-4583-82D6-A1A3DD9D69F4"}
 */
function getNavigationItemFromHistory(id){
	for(var i in itemsHistory){
		var item = itemsHistory[i];
		if (item.getID() == id){
			return item;
		}
	}
	return null;
}

/**
 * @public 
 * @return {NavigationItem}
 * @properties={typeid:24,uuid:"0BAAECA1-12F7-4EDF-B27B-12502A00F940"}
 */
function getCurrentItem(){
	return items[items.length-1];
}

/**
 * @public 
 * @param {NavigationItem|String} itemOrID
 * @return {Boolean}
 * @properties={typeid:24,uuid:"A9618AEE-8091-49D1-B838-EAC9CFDC7CCB"}
 */
function hasItem(itemOrID){
	return indexOf(itemOrID) >= 0;
}

/**
 * @public 
 * @param {Function} listener
 *
 * @properties={typeid:24,uuid:"04A23E5B-4EC6-4E24-BAB1-AA9CAF0A8169"}
 */
function addNavigationListener(listener) {
	if (listeners.indexOf(listener) === -1) {
		listeners.push(listener);
	}
}

/**
 * @public 
 * @param {Function} listener
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E5011D75-223B-40AA-A4A0-79C4A13CB464"}
 */
function removeNavigationListener(listener){
	for (var i = 0; i < listeners.length; i++) {
		if (listeners[i] === listener) {
			listeners.splice(i, 1);
			return true;
		}
	}
	return false;
}

/**
 * @param {NavigationItem} [item] the item being closed. If not specified close the current item
 * @private 
 * @return {Boolean}
 * @properties={typeid:24,uuid:"914C25FC-8CA0-4B8E-B399-624FED29A6EC"}
 */
function beforeClose(item){
	if (!item) item = getCurrentItem();
	return fireEvent(NAVIGATION_EVENT.BEFORE_CLOSE, item);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"6E9FD4C0-BD9C-4257-80F3-677953F8ACE6"}
 */
function afterOpen(){
	fireEvent(NAVIGATION_EVENT.AFTER_OPEN, getCurrentItem());
}

/**
 * @private 
 * @param {String} eventType
 * @param {NavigationItem} [item]
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"CFB73B7E-56EB-4FBD-B48F-F8BA4C312B0B"}
 */
function fireEvent(eventType, item) {
	var event = new NavigationEvent(eventType, item);
	for (var i in listeners) {
		/** @type {Function} */
		var listener = listeners[i];
		var result = listener.call(this, event);
		if (eventType == NAVIGATION_EVENT.BEFORE_CLOSE) {
			if (result === false) {
				return false;
			}
		}
	}
	return true;
}


/**
 * Returns the history of navigation items
 * @public 
 * @return {Array<NavigationItem>}
 *
 * @properties={typeid:24,uuid:"3ACE4E67-28CC-419D-A031-4944AA4A7809"}
 */
function getHistory() {
	return itemsHistory;
}

/**
 * Clears the history
 * @public 
 * @properties={typeid:24,uuid:"938BB658-5465-421D-A1C7-3FE835522B77"}
 */
function clearHistory() {
	itemsHistory = [];
}

/**
 * Goes back one step in the navigation history from the current position
 * @return {NavigationItem}
 * @public 
 * @properties={typeid:24,uuid:"526F3087-9A7A-4540-AFD5-F069FDE8D6FA"}
 */
function historyBack() {
	if (itemsHistory.length <= 1 || itemsHistoryIndex === 0) {
		//nowhere to go back or we already sit on the first item
		return null;
	}
	if (itemsHistoryIndex === -1) {
		itemsHistoryIndex = itemsHistory.length - 1;
	}
	//reduce index by 1
	itemsHistoryIndex --;
	var historyItem = itemsHistory[itemsHistoryIndex];
	//open previous item and return that
	openHandler(historyItem, true);
	return historyItem;
}

/**
 * Goes forward one step in the navigation history from the current position
 * @return {NavigationItem}
 * @public
 * @properties={typeid:24,uuid:"090823B5-6A79-4219-879A-789C0B8FA5EF"}
 */
function historyNext() {
	if (itemsHistory.length <= 1 || itemsHistoryIndex === -1 || itemsHistoryIndex >= (itemsHistory.length - 1)) {
		//nowhere to go to, we have not been through history at all or we already sit on the last item of the stack
		return null;
	}
	//advance index by 1
	itemsHistoryIndex ++;
	var historyItem = itemsHistory[itemsHistoryIndex];
	//open next item and return that
	openHandler(historyItem, true);
	return historyItem;
}

/**
 * Returns <code>true</code> when a historyNext can be performed
 * @return {Boolean}
 * @public 
 * @properties={typeid:24,uuid:"25CBB80E-C496-4703-A34D-6606C105028E"}
 */
function historyHasNext() {
	return itemsHistoryIndex !== -1 && itemsHistoryIndex <= itemsHistory.length - 2;
}

/**
 * Returns <code>true</code> when a historyBack can be performed
 * @return {Boolean}
 * @public 
 * @properties={typeid:24,uuid:"4BFC6545-7B49-44EC-BC71-D108370A9029"}
 */
function historyHasPrevious() {
	return !(itemsHistory.length <= 1 || itemsHistoryIndex === 0);
}

/**
 * Returns the current index when navigating through the history or -1, when not navigating
 * @return {Number}
 * @public 
 * @properties={typeid:24,uuid:"93410851-45D1-40C7-87E4-3C38FA26D978"}
 */
function getHistoryIndex() {
	return itemsHistoryIndex;
}

/**
 * Removes the given item from the history stack
 * @param {NavigationItem} itemToRemove
 *
 * @properties={typeid:24,uuid:"53F01671-D8B2-48E5-B8F0-093A0E5733D1"}
 */
function removeItemFromHistory(itemToRemove) {
	if (!itemToRemove) return;
	for (var i = 0; i < itemsHistory.length; i++) {
		if (itemsHistory[i].getID() === itemToRemove.getID()) {
			itemsHistory.splice(i, 1);
		}
	}
}

/**
 * Sets the maximum number of items held in the navigation history
 * A maximum number of -1 means there is no limit to the number of items in the history
 * @param {Number} historyLength
 * @public 
 *
 * @properties={typeid:24,uuid:"5E5051CF-F74E-4FE4-A24B-414140E6C522"}
 */
function setMaxHistoryLength(historyLength) {
	if (!(historyLength >= -1)) {
		//nothing reasonable given
		return;
	}
	MAX_HISTORY_LENGTH = historyLength;
	if (historyLength !== -1 && itemsHistory.length > historyLength) {
		//history already longer than given; remove from start what doesn't fit anymore
		itemsHistory.splice(0, itemsHistory.length - historyLength);
	}
}

/**
 * @constructor
 * @private 
 * @param {String} eventType
 * @param {NavigationItem} [item]
 * @properties={typeid:24,uuid:"B809ACA1-1541-4A8B-A0F7-0557C2034248"}
 */
function NavigationEvent(eventType, item){
	
	/**
	 * @public 
	 * @return {String}
	 */
	this.getEventType = function(){
		return eventType;
	}
	
	/**
	 * @public 
	 * @return {NavigationItem}
	 */
	this.getNavigationItem = function(){
		return item;
	}
}

/**
 * @constructor
 * @public  
 * @param {String} [formName]
 * @param {String} [text]
 * @param {String} [tooltipText]
 * @properties={typeid:24,uuid:"2280FA71-A862-4C29-943A-57DA126FFB0D"}
 */
function NavigationItem(formName, text, tooltipText) {
    
	/**
     * @protected
     * @type {String}
     * @ignore
     */
    this.id = application.getUUID().toString();
    
    /**
     * @protected
     * @type {String}
     * @ignore
     */
    this.formName = formName;
    
    /**
     * @protected
     * @type {String}
     * @ignore
     */
    this.text = text ? text : formName;
    
    /**
     * @protected
     * @type {String}
     * @ignore
     */
    this.tooltipText = tooltipText ? tooltipText : this.text;
    
    /**
     * @protected
     * @type {*}
     * @ignore
     */
    this.customData = null;
}

/**
 * Extends the NavigationItem prototype by adding the necessary methods.
 * Using this approach to minimize the memory footprint of the NavigationItem instances.
 * @constructor
 * @private
 * @properties={typeid:24,uuid:"D50A8EE4-B680-4470-A1B1-1B21D2CA7285"}
 */
function setupNavigationItem() {
	
    /**
     * @public
     * 
     * @this {NavigationItem}
     */
     NavigationItem.prototype.stringify = function() { 
    	 var json = new Object();
         json.id = this.getID();
         json.formName  = this.getFormName();
         json.text = this.getText();
         json.tooltipText = this.getTooltipText();
         json.customData = this.getCustomData();
         
         return JSON.stringify(json);
    };
    
    /**
     * Gets the name of the form associated with this navigation item.
     * @public
     * @return {String}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.getFormName = function() {
        return this.formName;
    };
    
    /**
     * Sets the name of the form associated with this navigation item.
     * @public
     * @param {String} formName
     * @return {NavigationItem}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.setFormName = function(formName) {
        if (!formName || !utils.stringTrim(formName)) {
            throw new Error('FormName is not specified');
        }
        this.formName = formName;
        return this;
    };
    
    /**
     * @public
     * @return {String}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.getText = function() {
        return this.text;
    };
    
    /**
     * @public
     * @param {String} text
     * @return {NavigationItem}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.setText = function(text) {
        this.text = text;
        return this;
    };
    
    /**
     * @public
     * @return {String}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.getTooltipText = function() {
        return this.tooltipText;
    };
    
    /**
     * @public
     * @return {String}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.getID = function() {
        return this.id;
    };
    
    /**
     * @public
     * @param {String} tooltipText
     * @return {NavigationItem}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.setTooltipText = function(tooltipText) {
        this.tooltipText = tooltipText;
        return this;
    };
    
    /**
     * @public
     * @return {*}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.getCustomData = function() {
        return this.customData;
    };
    
    /**
     * @public
     * @param {*} customData
     * @return {NavigationItem}
     * @this {NavigationItem}
     */
    NavigationItem.prototype.setCustomData = function(customData) {
        this.customData = customData;
        return this;
    };
}

/**
 * Initializes the module.
 * NOTE: This var must remain at the BOTTOM of the file.
 * @private
 * @SuppressWarnings (unused)
 *
 * @properties={typeid:35,uuid:"73D3B2D7-093B-4C94-B13E-867D9923BE16",variableType:-4}
 */
var init = function() {
    setupNavigationItem();
}();
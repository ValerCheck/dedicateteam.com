$(document).ready(function() {
	SetHeightOfLandTitle();
});

function SetHeightOfLandTitle() {
	
	var headerFlex = $('.block.content .flex-container.with-last-child-fill');

	for(i=0;i<headerFlex.length;i++){
		var headerChildren = $(headerFlex[i]).children();
	
		var menuHeight = parseInt($(headerChildren[0]).css('height')) + parseInt($(headerChildren[0]).css('margin-top'));

		var headerFlexHeight = parseInt($(headerFlex).css('height'));

		$(headerChildren[1]).css({'height': (headerFlexHeight - menuHeight) + "px"});
	}
};
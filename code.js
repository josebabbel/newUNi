var	fromIndex = columns.indexOf(from),
		toIndex, rows = [];
		
		if (fromIndex > -1) {
			
			columns.splice(fromIndex, 1);
			
			toIndex = columns.indexOf(to);
			
			if (toIndex > -1) {
				
				if(after){
					toIndex = toIndex+1;
				}
				
			}else{
				toIndex = fromIndex;//hi
			}
      
			if(typeof position === "undefined"){
				position = this.table.options.scrollToColumnPosition;
			}
			
			if(typeof ifVisible === "undefined"){
				ifVisible = this.table.options.scrollToColumnIfVisible;
			}
			
			if(column.visible){
				
if(!ifVisible){
					if(offset > 0 && offset + colEl.offsetWidth < this.element.clientWidth){
						return false;
					}
				}

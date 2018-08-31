1. html转抽象语法树
 
	-  compileToFunctions (10908)

	`html String` --> AST  -->   `render code `

	- parseHTML --->  createASTElement;  
		- parseText  
	  	- parseEndTag  
	  	- parseStartTag  
	
	
	
2. AST 生成 render code  
	AST  -->   `render code ` 
	- genElement() `9918`




3. render code 渲染为 vnode

	- renderCode to `vnode`
		- render.call  (4535)



4. vnode 生成实际的dom node

	- vm.__patch__ (line 2660)
		-  createElm (6117)
	 
	 
5. renderList 采用number作为key的问题
	 

 list 渲染方法：renderList

 
		 ƒ(item, index) {
		    return _c("comp-child", {
		        key: index,
		        tag: "component",
		        attrs: {
		            "parent-data": item
		        }
		    }, [_c('button', {
		        on: {
		            "click": function($event) {
		                deleteItem(index)
		            }
		        }
		    }, [_v("delete")])])
		}


		ƒ(item, index) {
		    return _c("comp-child", {
		        key: item.name,
		        tag: "component",
		        attrs: {
		            "parent-data": item
		        }
		    }, [_c('button', {
		        on: {
		            "click": function($event) {
		                deleteItem(index)
		            }
		        }
		    }, [_v("delete")])])
		}
 
 
 
 vnode更新方法:  patchVnode ->  updateChildren  --> sameVnode

       
    
    
function main_menu() {
	$.post("http://rankp.caf24.com/main_menu.php",
	{
		
	},function(data) {
		$("#main_menu").html(data);
	});
}



// 더보기 파일 

 

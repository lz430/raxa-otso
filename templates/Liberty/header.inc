<header>

	<div class="logo">			
		<h1><a href="/"><$logo maxwidth="600" maxheight="200" alt="Our company logo"$><$websitename/$><$/logo$></a></h1>
	</div>

	<div class="wrapper" id="header" data-cmsadmin-layout-header="true">
		<nav>
			<$globalmenu showLevels="1,2" alwaysShowChildren="true" showHome="true"/$>				
		</nav>
		
		<$loginstatus$>
			<$loggedin$>
				<a href="[editprofileurl]" class="profile">[picture]</a>
			<$/loggedin$>
		<$/loginstatus$>
        
        <$search buttonText="Search" labelText="" initialText="Search" /$>
        
        <$shoppingcartstatus$> 
            <$cartfull$>                                       
                <a href="[cart.url]">[cart.item_total]</a>
            <$/cartfull$>
            <$cartempty$><$/cartempty$>     
        <$/shoppingcartstatus$>
	</div>

</header>
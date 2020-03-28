cy.helper = {
    clickAvatarIconName: function(){
        return cy.get('.cell.shrink > div > div > .avatar-inner-container.with-hover').last();
    },
    getLoginUserFirstName: function() {
       this.clickAvatarIconName().click({force:true});
       return cy.get('[data-component-type="popover"] > span > div > ul > li > span').eq(0).invoke('text');
    }
   
}

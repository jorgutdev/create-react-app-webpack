
package de.tetralog.app.bows.simulator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BaseController {

    private static final String VIEW_INDEX = "index.html";

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(final ModelMap model) {
        return BaseController.VIEW_INDEX;
    }


    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(final ModelMap model) {
        return BaseController.VIEW_INDEX;
    }


}

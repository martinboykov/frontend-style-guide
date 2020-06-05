import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
  selector: 'app-code-for-america',
  templateUrl: './code-for-america.component.html',
  styleUrls: ['./code-for-america.component.scss'],
})
export class CodeForAmericaComponent implements OnInit {
  html = `
  <button class="btn"
          type="button">Button</button>
  <button type="submit"
          class="btn">Submit button</button>
  <a class="btn">Link button</a>
  <input type="button"
         value="Input button"
         class="btn">
  <input type="submit"
         value="Input submit button"
         class="btn">
`;
  css = `
  .btn {
    height: 40px;
    margin: 0 8px 4px 0;
    padding: 0 26px;
    font-family: $font-default;
    background-color: #399fd3;
    border-radius: 4px;
    border: none;
    color: white;
    overflow: visible; /* the overflow property removes extra width in IE */
  }
  .btn:hover,
  .btn:focus {
    background-color: #7ab5d6;
  }
  a.btn {
    display: inline-block;
    line-height: 40px;
  }
  `;

  js = `
  import passport from "passport";
import debug from "debug";
import passportLocal from "../services/passport/passport-local";
import { ApplicationError, NotFoundError } from "../helpers/errors";

const DEBUG = debug("dev");

const createCookieFromToken = (user, statusCode, req, res) => {
  const token = user.generateVerificationToken();

  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

  `;

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {
    this.html = this.prismService.highlightJs(this.html);
  }
  ngAfterViewInit() {
    this.prismService.highlightAll();
  }
}

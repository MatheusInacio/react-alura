import React from "react";
import "./Rodape.css";

export default function Rodape() {
  return (
    <footer>
      <div className="social">
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <img src="/imagens/logo.png" alt="" />
      <div>
        <p>Desenvolvido por Matheus Inácio</p>
      </div>
    </footer>
  );
}

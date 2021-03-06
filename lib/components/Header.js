'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require('../utils/deepMerge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Header(_ref, _ref2) {
	var theme = _ref2.theme;

	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
		onRotate = _ref.onRotate,
		onCounterRotate = _ref.onCounterRotate,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    rotateButtonTitle = _ref.rotateButtonTitle,
	    showRotateButton = _ref.showRotateButton,
	    props = _objectWithoutProperties(_ref, ['customControls', 'onRotate', 'onCounterRotate', 'onClose', 'showCloseButton', 'showRotateButton', 'closeButtonTitle', 'rotateButtonTitle']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(classes.header) }, props),
		!!showRotateButton && _react2.default.createElement(
			'div',
			_extends({
				title: 'rotateContainer',
				className: (0, _noImportant.css)(classes.rotateContainer) },props),				
				!!showRotateButton && _react2.default.createElement(
					'button',
					{
						title: rotateButtonTitle,
						className: (0, _noImportant.css)(classes.counterRotate),
						onClick: onCounterRotate
					},
					_react2.default.createElement(_Icon2.default, { fill: !!theme.counterRotate && theme.counterRotate.fill || _theme2.default.counterRotate.fill, type: 'counterRotate' })
				),
				_react2.default.createElement('span',{className:  (0, _noImportant.css)(classes.spacer)}),
				!!showRotateButton && _react2.default.createElement(
					'button',
					{
						title: rotateButtonTitle,
						className: (0, _noImportant.css)(classes.rotate),
						onClick: onRotate
					},
					_react2.default.createElement(_Icon2.default, { fill: !!theme.rotate && theme.rotate.fill || _theme2.default.rotate.fill, type: 'rotate' })
				),
		),
		customControls ? customControls : _react2.default.createElement('span', null),
		!!showCloseButton && _react2.default.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: (0, _noImportant.css)(classes.close),
				onClick: onClose
			},
			_react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
		)
	);
}

Header.propTypes = {
	customControls: _propTypes2.default.array,
	onClose: _propTypes2.default.func.isRequired,
	showCloseButton: _propTypes2.default.bool
};
Header.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: _theme2.default.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40
	},
	rotateContainer: {
		justifyContent: 'center',
		display: 'flex',
		flex: 1,
		marginLeft: '40px',
	},
	rotate: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginLeft: -10,
		padding: 10,
		width: 40,
	},
	counterRotate: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		transform: 'scaleX(-1)',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginLeft: -10,
		padding: 10,
		width: 40,
	},
	spacer: {
		width: 10,
	},
};

exports.default = Header;
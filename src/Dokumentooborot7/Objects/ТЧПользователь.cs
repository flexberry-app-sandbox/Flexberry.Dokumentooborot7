﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dokumentooborot7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч пользователь.
    /// </summary>
    // *** Start programmer edit section *** (ТЧПользователь CustomAttributes)

    // *** End programmer edit section *** (ТЧПользователь CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч пользователь")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧПользовательE", new string[] {
            "АвПользователи as \'Ав пользователи\'",
            "АвПользователи.Логин as \'Логин\'",
            "АвПользователи.Пароль"}, Hidden=new string[] {
            "АвПользователи.Логин"})]
    [MasterViewDefineAttribute("ТЧПользовательE", "АвПользователи", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Логин")]
    public class ТЧПользователь : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Dokumentooborot7.АвПользователи fАвПользователи;
        
        private IIS.Dokumentooborot7.ВходВСистему fВходВСистему;
        
        // *** Start programmer edit section *** (ТЧПользователь CustomMembers)

        // *** End programmer edit section *** (ТЧПользователь CustomMembers)

        
        /// <summary>
        /// Т ч пользователь.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПользователь.АвПользователи CustomAttributes)

        // *** End programmer edit section *** (ТЧПользователь.АвПользователи CustomAttributes)
        [PropertyStorage(new string[] {
                "АвПользователи"})]
        [NotNull()]
        public virtual IIS.Dokumentooborot7.АвПользователи АвПользователи
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Get start)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Get start)
                IIS.Dokumentooborot7.АвПользователи result = this.fАвПользователи;
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Get end)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Set start)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Set start)
                this.fАвПользователи = value;
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Set end)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Dokumentooborot7.ВходВСистему.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему CustomAttributes)

        // *** End programmer edit section *** (ТЧПользователь.ВходВСистему CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ВходВСистему"})]
        public virtual IIS.Dokumentooborot7.ВходВСистему ВходВСистему
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Get start)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Get start)
                IIS.Dokumentooborot7.ВходВСистему result = this.fВходВСистему;
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Get end)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Set start)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Set start)
                this.fВходВСистему = value;
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Set end)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧПользовательE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧПользовательE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧПользовательE", typeof(IIS.Dokumentooborot7.ТЧПользователь));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧПользователь.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧПользователь CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧПользователь CustomAttributes)
    public class DetailArrayOfТЧПользователь : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Dokumentooborot7.DetailArrayOfТЧПользователь members)

        // *** End programmer edit section *** (IIS.Dokumentooborot7.DetailArrayOfТЧПользователь members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧПользователь by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧПользователь.
        /// </summary>
        public DetailArrayOfТЧПользователь(IIS.Dokumentooborot7.ВходВСистему fВходВСистему) : 
                base(typeof(ТЧПользователь), ((ICSSoft.STORMNET.DataObject)(fВходВСистему)))
        {
        }
        
        public IIS.Dokumentooborot7.ТЧПользователь this[int index]
        {
            get
            {
                return ((IIS.Dokumentooborot7.ТЧПользователь)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Dokumentooborot7.ТЧПользователь dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
